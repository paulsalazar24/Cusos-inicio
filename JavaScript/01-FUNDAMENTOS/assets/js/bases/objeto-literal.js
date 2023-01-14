const personaje = {
    nombre: 'Paul',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    corrds:{
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark II', 'Mark V'],
    direccion:{
        zip:'10880, 90264',
        ubicacion: 'Malibu, california'
    },
    'ultima-pelicula': 'Infinity war'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);


console.log('corrds:', personaje.corrds);
console.log('Lat:', personaje.corrds.lat);
console.log('Nro. Traje:', personaje.trajes.length)
console.log('último traje:', personaje.trajes[personaje.trajes.length - 1] )
 
const x = 'vivo';
console.log('Vivo:', personaje[x]);

console.log('Última película:', personaje['ultima-pelicula']);

 
// mas detalles 

delete personaje.edad;
console.log(personaje)

personaje.casado = true; 

const entriesPares = Object.entries(personaje);
console.log( entriesPares)

Object.freeze( personaje );

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
//const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log({propiedades, valores});











