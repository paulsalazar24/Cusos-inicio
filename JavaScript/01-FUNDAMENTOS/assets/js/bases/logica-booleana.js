
const regresarTrue = () =>{
    console.log('regresar true'); 
    return true;
}


const regresarFalse = () => {
    console.log('Regresar false');
    return false;
}


console.warn('Hola aplicación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresarFalse() ); //true


console.warn('And'); // true si todos los valores con verdadero 
console.log( true && true ); // true
console.log( true && !false); // true 


console.log('==========================');

console.log(regresarFalse() && regresarTrue()); // false - javascrip reconoce la primera condicion 
console.log(regresarTrue() && regresarFalse()); // false 

console.log('==== && ====');

regresarFalse() && regresarTrue();

console.log('4 condiciones', true && true && true && false); // false

console.log('OR'); //true

console.log( true || false );
console.log( false || false); 
console.log(regresarFalse() || regresarTrue());

console.log('4 condiciones', true || true || true || false); // true




console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true &&  'Hola mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'ya no soy falso';
const a5 = soyFalso || soyUndefined || regresarTrue() || 'ya no soy falso';

console.log({a1, a2, a3, a4, a5});

//en un if() -> no debe de ver mas condiciones 

if ( true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}







