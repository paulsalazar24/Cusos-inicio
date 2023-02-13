

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}



const pedro = {
    nombre: 'Medro',
    edad: 15,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


// fher.imprimir();

//esto se debe de crear con la palabra new
function Persona (nombre, edad){
    console.log('se esjecuto esta linea');

    this.nombre = nombre;
    this.edad = edad; 
    this.imprimir= function (){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
    }

}


const maria = new Persona('Maria', 18);
const melissa = new Persona('Melisaa', 25);
// console.log(maria);
maria.imprimir();
melissa.imprimir();















