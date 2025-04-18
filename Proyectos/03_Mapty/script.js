'use strict';

// Selectores
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Clases
class Workout{

    date = new Date();
    id = Date.now() + ''.slice(-10);
    clicks = 0;

    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance;   // Km
        this.duration = duration;   // Minutes
    }

    _setDescription(){
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`

    }

    _click(){
        this.clicks++;
    }
}

class Running extends Workout{
    type = 'running';

    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        
        this.calcPace();
        this._setDescription();
    }

    calcPace(){
        // Min/Km
        this.pace = this.duration / this.distance; 
        return this.pace;
    }
}

class Cycling extends Workout{
    type = 'cycling'

    constructor(coords, distance, duration, elevation){
        super(coords, distance, duration);
        this.elevation = elevation;

        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed(){
        // Km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}


// Arquitectura de la Aplicacion
class App{
    #map;
    #mapZoomLevel = 15;
    #mapEvent;
    #workouts = [];

    constructor(){

        // Obtener Posicion del Usuario
        this._getPosition();

        // Obtener Data de Local Storage
        this._getLocalStorage();

        // Attach Event Handlers
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField)
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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

        const coords = [latitude, longitude]
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // Desplegar un Marcador en el lugar que Hagamos Click    
        this.#map.on('click', this._showForm.bind(this));    

        this.#workouts.forEach(work => {
            this._renderWorkoutMarker(work);
        });
    }

    _showForm(mapE){
        this.#mapEvent = mapE
        // Formulario de Entrada de Datos de Entrenamiento
        form.classList.remove('hidden')
        inputDistance.focus();
    }

    _hideForm(){
        // Vaciar Campos
        inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(function(){
            return (form.style.display = 'grid', 1000)
        });
    }

    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){

        // Verificar si los Inputs son Finitos 
        const validInputs = function(...inputs){
            return inputs.every(input => Number.isFinite(input))
        }
        // Verificar si los Inputs son Positivos
        const positiveInputs = function(...inputs){
            return inputs.every(input => input > 0);
        }

        e.preventDefault();

        // Obtener Datos del Formulario
        const type = inputType.value;
        const distance = Number(inputDistance.value);
        const duration = Number(inputDuration.value);
        const {lat, lng} = this.#mapEvent.latlng
        let workout;

        // Crear un objeto de Running si es del tipo
        if(type === 'running'){
            const cadence = Number(inputCadence.value);

            // Verificar si los Datos son validos
            if (!validInputs(distance, duration, cadence) || !positiveInputs(distance, duration, cadence)) 
                return alert ('Inputs have to be positive numbers!')

            workout = new Running([lat, lng], distance, duration, cadence);
        }

        // Crear un objeto de Cycling si es del tipo
        if (type === 'cycling'){
            const elevation = Number(inputElevation.value);

            // Verificar si los Datos son validos
            if (!validInputs(distance, duration, elevation) || !positiveInputs(distance, duration)) 
                return alert ('Inputs have to be positive numbers!')

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        // Agregar nuevo objeto al arreglo de Entrenamiento
        this.#workouts.push(workout);

        // Renderizar en el mapa como un marcador
        this._renderWorkoutMarker(workout);

        // Renderizar el entrenamiento en la lista
        this._renderWorkout(workout);

        // Esconder Formulario y Limpiar Datos de Input
        this._hideForm();
        
        // Almacenar en el Local Storage los entrenamientos
        this._setLocalStorage();

    }

    _renderWorkout(workout){
        let html = `<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

          if (workout.type === 'running'){
            html += `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
            </li>`
          }

          if (workout.type === 'cycling'){
            html += `
                <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed}</span>
                <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevation}</span>
                <span class="workout__unit">m</span>
            </div>
            </li>`
          }

          form.insertAdjacentHTML('afterend', html);
    }

    _renderWorkoutMarker(workout){
        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
        }))
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}${workout.description}`)
        .openPopup();
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout');

        if (!workoutEl) return;

        const workout = this.#workouts.find(function(work){
            return work.id === workoutEl.dataset.id;
        });

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: 1
            }
        });

        // Usando la Interfaz Publica
        //workout._click();;
    }

    _setLocalStorage(){
        localStorage.setItem('workouts', JSON.stringify(this.#workouts))
    }

    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;

        this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
        });
    }

    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }

}

// Instancia de la clase App
const app = new App();


