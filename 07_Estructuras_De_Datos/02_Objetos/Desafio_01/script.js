'use strict';

// ---- Desafío de Programación ----

/*
    Se está construyendo una aplicación de apuestas de Futbol

    Suponiendo que se obtiene toda la data de un servicio web sobre un juego en específico.
    Las tareas son las siguientes:

    1. Crear un arreglo para los jugadores de cada equipo (players1 y players2).
    2. El primer jugador en cualquiera de los arreglos es el arquero y el resto los jugadores
       de campo. Para Bayern Munich crear una variable ('gk') con el nombre del arquero y
       otra variable denominada ('fieldPlayers') con 10 jugadores restantes.
    3. Crear un arreglo 'allPlayers' que contenga todos los jugadores de ambos equipos.
    4. Durante el juego, Bayern Munich uso 3 cambios. Crear un nuevo arreglo denominado
       ('players1Final') que contenga todo el equipo original más los jugadores
       'Thiago', 'Perisic', 'Coutinho'.
    5. Basado en el objeto game.odds, crear una variable para cada apuesta ('team1', 'draw', 'team2')
    6. Escribir una funcion ('printGoals') que reciba un numero arbitrario de nombre de jugadores
       (NO UN ARREGLO) e imprima cada uno de ellos en consla, junto con el numero de goles que
       se anotaron.
    7. El equipo con la apuesta más baja es el más probable a ganar. Imprimir en consola cual equipo
       es más probable que se lleve la victoria.

    TEST DATA Para 6: Usar los jugadores "Davies", "Muller", "Lewandowski", "Kimmich".
                      Luego, llamar a la funcion otra vez con los jugadores de game.scored

*/

// Solucion

// Objeto

const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnabry',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2020',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Tasks

// Tarea 1

const [players1, players2] = game.players;
console.log(players1, players2);

// Tarea 2

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Tarea 3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Tarea 4

const players1Final = [...players1, 'Thiago', 'Perisic', 'Coutinho'];
console.log(players1Final);

// Tarea 5

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// Tarea 6

function printGoals(...players){
    console.log(`${players.length} goals were scored.`)
}

printGoals(...game.scored);

// Tarea 7

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');