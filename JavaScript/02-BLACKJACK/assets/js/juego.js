//patron modulo

//funcion anonima 
(()=>{
    'use strict'

        let deck = [];
        const tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];

        let puntosJugadores = [];

        //referencias del html

        const btnPedir = document.querySelector('#btnPedir'),  
              btnDetener = document.querySelector('#btnDetener'), 
              btnNuevo = document.querySelector('#btnNuevo'); 


        const divCartasJugadores = document.querySelectorAll('.divCartas'),
              puntosHTML = document.querySelectorAll('small');

        //iniciamos juego

        const inicializarJuego = (numJugadores = 2) => {
                deck = crearDeck();
                for (let i = 0; i< numJugadores; i++){
                    puntosJugadores.push(0);
                }
         }

        //esta funcion crea un nuevo deck
        const crearDeck = () =>{

            deck = [];

            for(let i = 2; i <= 10; i++){
                // deck.push(i + 'C');
                for(let tipo of tipos){
                    deck.push(i + tipo);

                }
            }

            for(let tipo of tipos){
                for(let esp of especiales){
                    deck.push(esp + tipo);
                }
            }
            //con al libreria realiza un orden aleatorio 
            return _.shuffle(deck);
        }

        

        //esta funcion me permite tomar una carta 
        const pedirCarta = ()=>{
            if(deck.length === 0){
                throw 'No hay cartas en el deck';
            }
        return deck.pop();
        }



        const valorCarta = (carta) => {
            const valor = carta.substring(0, carta.length -1);
            return (isNaN(valor)) ?
                    (valor === 'A') ? 11 : 10
                    : valor *1;
        }


//TURNO: 0 primer jugador y el ultimo sera la computadora 

        const acumularPuntos = (carta, turno) =>{
            puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
            puntosHTML[turno].innerText = puntosJugadores[turno];
            return  puntosJugadores[turno];
        }

        //
        const crearCarta =(carta, turno) =>{

            const imgCarta = document.createElement('img');
             imgCarta.src = `assets/cartas/${carta}.png`;
             imgCarta.classList.add('carta');
             divCartasJugadores[turno].append(imgCarta);
           
        }

        //
        const determinarGanador = () => {

            const[puntosMinimos, puntosComputadora] = puntosJugadores;

            setTimeout(() =>{ 
                if( puntosComputadora === puntosMinimos){
                        alert('Nadie gana :(');
                }else if (puntosMinimos > 21){
                        alert('Computadora gana');
                }else if(puntosComputadora > 21){
                        alert('Jugador gana');
                }else{
                        alert('Computadora gana');
                }
            }, 10); 

        }


        //TURNO DE LA COMPUTADORA 
        const turnoComputadora = (puntosMinimos) =>{
            let puntosComputadora = 0;
            do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta,puntosJugadores.length - 1 );
            }while((puntosComputadora <  puntosMinimos) && (puntosMinimos<=21) );    

            determinarGanador();
        }



        //eventos 

        btnPedir.addEventListener('click', () =>{

                const carta = pedirCarta();
                const puntosJugador = acumularPuntos(carta, 0);
                crearCarta(carta, 0 );
        
                    if(puntosJugador > 21){
                        console.warn('Lo siento mucho, perdiste');
                        btnPedir.disabled = true;
                        btnDetener.disabled = true;
                        turnoComputadora(puntosJugador);
                    }else if (puntosJugador === 21){
                        console.warn('21, Genial!!!')
                        btnPedir.disabled = true;
                        btnDetener.disabled = true;
                        turnoComputadora(puntosJugador);
                    }


        });


        btnDetener.addEventListener('click', ()=> {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador);
        });


        btnNuevo.addEventListener('click', ()=>{

            inicializarJuego();
             console.clear();
            // deck = crearDeck();
            // puntosJugador = 0;
            // puntosComputadora = 0;


            // puntosHTML[0].innerText = 0;
            // puntosHTML[1].innerText = 0;

            // divCartasComputadora.innerHTML = '';
            // divCartasJugador.innerHTML = '';
            // btnPedir.disabled = false;
            // btnDetener.disabled = false;
        });



})();







