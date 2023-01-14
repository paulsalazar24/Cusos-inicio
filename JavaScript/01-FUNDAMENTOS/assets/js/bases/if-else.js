

let a = 5;


if (a > 10) { //undefined, null, un asignacion
    console.log('A es a mayor a dios ');
}else {
    console.log('A es menor a 10');
}  


// console.log('Fin de programa');


const hoy = new Date(); //{}
let dia = hoy.getDay(); //0: domingo, 1: lunes , 2: martes.............

console.log({dia});


// = solo regresa una asignacion, va regresar el valo que una asigna y no es recomendable usarlo 
// == no considera el tipo de dato, reconoce de acuero al valor que se le indica 
// == evaluna el tipo de dato sea igual, para poder considerar esa evaluacion
if( dia === 0){
    console.log('Domingo');
}else if(dia === 1){
console.log('Lunes');
 //condiciones anidades
    // if(dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
 
}else if (dia === 2){
    console.log('Martes');
}else {
    console.log('No es lunes, martes o domingos');
}


//sin usar if else, o Swhith unicamnete objetos 

dia = 3;

const diaLetras = {
    0: 'domingo', 
    1: 'lunes', 
    2: 'martes', 
    3: 'miercoles', 
    4: 'jueves', 
    5: 'viernes',
    6: 'sabado'
}

//dia de la semana 
console.log(diaLetras[dia] || 'Día no definido');


//funcion de flechas en objetos
dia = 5;

const diasLetras = {
    0: ()=> 'domingo - 0', 
    1: ()=> 'lunes - 1', 
    2: ()=> 'martes - 2', 
    3: ()=> 'miercoles - 3', 
    4: ()=> 'jueves - 4', 
    5: ()=> 'viernes - 5',
    6: ()=> 'sabado - 6'
}

//dia de la semana 
console.log(diasLetras[dia]());


//haciendo uso de arreglos
dia = 2;

const diasLetras2 = ['domingo', 'lunes',  'martes', 'miercoles', 'jueves', 'viernes', 'sabado '];
//dia de la semana 
console.log(diasLetras2[dia]());









