/*
    Desafio de Programación #2

    Tomar el elemento IIFE debajo y al final de la función, agregar un event listener que cambie
    el color del elemento seleccionado h1 a Azul, cada vez que el elemento en BODY es cambiado.
    No seleccionar el H1 otra vez

*/

// Solucion

(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();
