let juegos = ['selda', 'mario', 'cars', 'lesrs'];

console.log('Largo: ', juegos.length)

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

// .length ayuda a tener la cantidad de una arreglo 


console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});


//agregamos elemto a nuetro array
let nuevLongitud = juegos.push('mortal combal');

console.log({nuevLongitud, juegos})

// agregaremos en el inicio del arreglo 
nuevLongitud = juegos.unshift('fire emblem');
console.log({nuevLongitud, juegos})


let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})
 

console.log(juegos);

let pos = 1;
let juegosBorrados = juegos.splice( pos, 2);
console.log({juegosBorrados, juegos})


let metroidIndex = juegos.indexOf('cars'); //CaSeSeNsItIvE
console.log({metroidIndex});