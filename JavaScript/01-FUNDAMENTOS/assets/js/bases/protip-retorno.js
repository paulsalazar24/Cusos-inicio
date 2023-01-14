

const crearPersona = (nombre, apellido) => ({nombre,apellido});
const persona = crearPersona('Fernando', 'Salazar');

console.log(persona);


function imprimeArgumentos(){
    console.log(arguments)
}


const imprimeArgumentos2 = ( edad, ...args) =>{
    // console.log(edad, args)
    return args;
}

imprimeArgumentos(10,true, false, 'fernando', 'hola');
const argumentos = imprimeArgumentos2(10,true, false, 'fernando', 'hola');

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10,true, false, 'fernando', 'hola');

console.log({casado, vivo, nombre, saludo});

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Salazar');
console.log({nuevoApellido});


const paul = {
    nombre: 'Paul neder',
    codeName: 'Iron-man',
    vivo: false,
    edad:25,
    trajes: ['uniforme2', 'uniformeN13']
} 


const imprimePropiedades5 = ({nombre, codeName, vivo, edad = 15, trajes}) =>{

    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);

}


imprimePropiedades5(paul);

