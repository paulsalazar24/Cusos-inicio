let a = 10;
let b = a;
a = 30;

console.log({a , b});


let juan = {nombre : 'juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});




const cambiarNombre = ({...persona}) => {
    persona.nombre = 'TONY';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiarNombre(peter);

console.log({peter, tony});


//arrglos

const frutas = ['manzana', 'pera', 'piña']


// const otrasFutras = [...frutas];
console.time('slice');
const otrasFutras = frutas.slice();
console.timeEnd('slice');


console.time('spread');
const otrasFutras2 = [...frutas];
console.timeEnd('spread');




otrasFutras.push('Mnago');

console.table({frutas, otrasFutras});


























