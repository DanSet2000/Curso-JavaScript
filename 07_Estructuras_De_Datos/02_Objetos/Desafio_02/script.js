'use strict';

// ---- Desafío de Programación ----

/*
    1. Recorre el array game.scored e imprime el nombre de cada jugador en la consola, junto 
       con el número de gol (Ejemplo: «Gol 1: Lewandowski»)
    2. Usa un bucle para calcular la media de Probabilidades y regístrala en la consola 
       (Ya estudiamos cómo calcular medias, puedes ir a comprobarlo si no lo recuerdas)
    3. Imprime las 3 probabilidades en la consola, pero con un formato bonito, exactamente así:
        Odd of victory Bayern Munich: 1.33
        Odd of draw 3.25
        Odd ov victory Borrussia Dortmund: 6.5
    Obtenga los nombres de los equipos directamente del objeto de juego, no los codifique 
    (excepto para «empate»). SUGERENCIA: Fíjate en que las probabilidades y los objetos de juego tienen los mismos nombres de propiedades 😉 .

    BONUS: Crea un objeto llamado «goleadores» que contenga los nombres de los
    jugadores que marcaron como propiedades, y el número de goles como valor. En este juego, tendrá el siguiente aspecto:
    {
    Gnabry: 1
    Hummels: 1
    Lewandowski: 2
    }
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

for (const [index, score] of game.scored.entries()){
    console.log(`Goal ${index + 1}: ${score}`)
}

// Tarea 2

let sumaOdds = 0;
for (const odd of Object.values(game.odds)){
    sumaOdds += odd;
}

console.log(sumaOdds/3);

// Tarea 3

for (const [team, odd] of Object.entries(game.odds)){
    const teamString = team === 'team1' ? 'Bayern Munich' : 'Borussia Dortmund';

    if (team === 'x'){
        console.log (`Odd of ${team}: ${odd}`)
    }else{
        console.log (`Odd of victory ${teamString}: ${odd}`)
    }
}