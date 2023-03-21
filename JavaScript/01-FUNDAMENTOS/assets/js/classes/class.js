//priemro propiedades 

class Persona {

    nombre='';
    codigo='';
    frase='';
    comida='';

    constructor(nombre = 'sin nombre',codigo ='sin codigo',frase='sin frase'){

       // if(!nombre) throw Error('Necesitamos el nombre');


        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

    }


    //sets y gets




    


    //metodos

    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es el ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`mi farse es : ${this.frase} `);
    }

}



const spiderman = new Persona('peter','hombre araña', 'tu amigo');
const airoman = new Persona('tony','airon', 'hombre acero');
console.log(spiderman);
console.log(airoman);

spiderman.quienSoy();
spiderman.miFrase();

airoman.quienSoy();