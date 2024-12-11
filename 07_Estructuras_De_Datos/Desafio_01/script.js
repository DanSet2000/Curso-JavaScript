'use strict';

// ---- Desafío de Programación ----

/*
    ¡Sigamos con nuestra aplicación de apuestas de fútbol! Esta vez, 
    tenemos un mapa con un registro de los eventos que ocurrieron durante el partido. 
    Los valores son los eventos en sí, y las claves son los minutos en los que ocurrió 
    cada evento (un partido de fútbol tiene 90 minutos más alguna prórroga).

    1. Crea un array 'eventos' con los diferentes eventos del partido que sucedieron 
       (sin duplicados)
    2. Una vez finalizado el partido, se descubre que la tarjeta amarilla del minuto 64 
       fue injusta. Así que elimina este evento del registro de eventos del partido.
    3. Imprime la siguiente cadena en la consola: «Ha ocurrido un evento, de media, 
       cada 9 minutos» (ten en cuenta que un partido tiene 90 minutos)
    4. Haz un bucle sobre los eventos y regístralos en la consola, marcando si es en 
       la primera mitad o en la segunda mitad (después de 45 minutos) del partido, así:
       [PRIMER TIEMPO] 17: ⚽️ GOL

*/

// Solucion

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// ---- Tareas ----

// Tarea 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// Tarea 2 
gameEvents.delete(64);

// Tarea 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes.`)

// Tarea 4
for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${min}: ${event}`);
}