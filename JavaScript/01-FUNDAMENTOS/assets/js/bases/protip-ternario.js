const elMayor = (a,b) => ( a > b)  ? a : b;

const tieneMenbresia = (mienbre) =>(mienbre) ?  '2 Dolares': '10 Dolares ';

console.log(elMayor(20, 15));
console.log(tieneMenbresia(false));


const amigo = false;
const amigoArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10,15)
];

console.log(amigoArr);


const nota = 65;
const grado =   nota >= 95 ? 'A+' :
                nota >= 90 ? 'A'  :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B'  :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});






















