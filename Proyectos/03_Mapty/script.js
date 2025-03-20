'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Selectores
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Clases

class App{
    #map;
    #mapEvent

    constructor(){
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField)
    }

    // Metodos

    _getPosition(){

        // Verificar que existe en caso de ser un navegador antiguo
        if (navigator.geolocation)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
                alert('Could not get your position')
            });
    }

    _loadMap(position){
        // Obtener Latitude y Longitud de la API
        const {latitude} = position.coords;
        const {longitude} = position.coords;

        console.log(`https://www.google.ec/maps/@${latitude},${longitude}`)
        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, 15);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // Desplegar un Marcador en el lugar que Hagamos Click    
        this.#map.on('click', this._showForm.bind(this));    
    }

    _showForm(mapE){
        this.#mapEvent = mapE
        // Formulario de Entrada de Datos de Entrenamiento
        form.classList.remove('hidden')
        inputDistance.focus();
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){
        e.preventDefault();
        
        // Limpiar Campos de Entrada
        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';
    
        // Desplegar Marcador
        const {lat, lng} = this.#mapEvent.latlng
    
        L.marker([lat, lng]).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('Workout')
        .openPopup();
    }
}

// Instancia de la clase App
const app = new App();
app._getPosition();

