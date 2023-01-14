//este tipo de funcion puede traer problemas si es que declaramos con el mismos nombre haciendo uso del var 

function saludar(nombre ){
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return 10;
console.log('Soy un codigo que esta despues del return');
}


// esta es otra manera de declarar una funcion anonima

const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}


//funcion de flecha 

const saludarFlecha = () => {
    console.log('Hola flecha');
}


const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Paul', 40, true, 'Costa Rica');

console.log(retornoDeSaludar);
// saludar2('Fernando');

// saludarFlecha();
// saludarFlecha2('karla');


function sumar(a,b){
    return a + b;
}

//realizamos una funcion de flecha la cual tendra parametros 
const sumar2 = (a,b)=>{
    return a + b;
}



//podemos retornar de esta manera cuando es una linea de codigo  
const sumar3 = (a,b)=>a+b;

// console.log(sumar3(4,7));


function getAleatorio(){
    return Math.random();
}


const getAleatorio2 = ()=>Math.random();


console.log(getAleatorio2());