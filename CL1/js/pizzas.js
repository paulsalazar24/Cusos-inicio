var  arrayUnidad = [];
var  arrayTotalIgv = [];

function mostrarNombre() {
    var objProducto;
    objProducto = document.getElementById("pizzas");
    
    //NOMBRE PRODUCTO
    var nombreProducto;
    nombreProducto = objProducto.options[objProducto.selectedIndex].text;
    var objNombre;
    objNombre = document.getElementById("previa").getElementsByTagName("p")[0];
    objNombre.innerHTML = "<strong>Pedido:  </strong>"+ nombreProducto;
}


function mostrarCantidad(){

     //CANTIDAD PRODUCTO
     var objCantidad;
     objCantidad = document.getElementById("cantidad");
     var cantidad;
     cantidad = objCantidad.value;
 
     var cantidadObj;
     cantidadObj = document.getElementById("previa").getElementsByTagName("p")[1];
     cantidadObj.innerHTML ="<strong>Cantidad:  </strong>" + cantidad;


}



function agregarCarrito(){
   
    var objProducto;
    objProducto = document.getElementById("pizzas")

//nombre tabla producto    

    var nombreProductoCarrito;
    nombreProductoCarrito = objProducto.options[objProducto.selectedIndex].text;
    
//cantidad tabla prosucto
   var objCantidadCarrito;
   objCantidadCarrito = document.getElementById("cantidad");
   
   var cantidadCarrito;
   cantidadCarrito = objCantidadCarrito.value;

   
//precio sin igv tabla
var valorProducto;
    valorProducto = objProducto.value;

    var precioSinIGV;
    switch (valorProducto) {

        case "m": precioSinIGV = 20;break;
        case "p": precioSinIGV = 22;break;
        case "h": precioSinIGV = 24;break;
        case "r": precioSinIGV = 25;break;
        case "n": precioSinIGV = 28;break;
        default: precioSinIGV =0;
    }

var sinIgv;
sinIgv = precioSinIGV;

//igv
var igv;
igv = 1.18;


//precio con igv tabla
   var precioconIGV;
   precioconIGV = precioSinIGV *cantidadCarrito * igv;

   //validaciones

   //compra no valida
   var compraValida  = 0;


    if(nombreProductoCarrito == ""){
        alert("error de ingreso de producto");
    }else if(cantidadCarrito == "" || cantidadCarrito <= 0){
        alert("error de ingreso de cantidad");    
    }else{
            compraValida  = 1;
    }

    if(compraValida == 1){
        //PERMITIR COMPRA
        
        // tabla
        var objTabla;
        objTabla = document.getElementById("mitabla");

        var numeroFilas;
        numeroFilas = objTabla.rows.length;

       
        
        if(numeroFilas < 6){
            //crear fila
            var fila;
            fila = objTabla.insertRow(numeroFilas);
             // crear celda
             var celdaNombre, celdaUnidad, celdaPrecio, celdaIGV, celdaPrecioCIGV;
                     
             celdaNombre = fila.insertCell(0);
             celdaUnidad = fila.insertCell(1);
             celdaPrecio = fila.insertCell(2);
             celdaIGV = fila.insertCell(3);
             celdaPrecioCIGV = fila.insertCell(4);

             //escribir en las celdas
             celdaNombre.innerHTML= nombreProductoCarrito;
             celdaUnidad.innerHTML= cantidadCarrito;
             celdaPrecio.innerHTML= sinIgv; 
             celdaIGV.innerHTML= igv; 
             celdaPrecioCIGV.innerHTML= precioconIGV; 
             
             arrayUnidad.push(cantidadCarrito);
             arrayTotalIgv.push(precioconIGV);
        }

        if(numeroFilas > 5){
            alert("error de adicion al carrito")
        }


    }

}







function limitarDni(){
    var objdni;
    objdni = document.getElementById("dni");

    var dni;
    dni= objdni.value;

    var longitud;
    longitud = dni.length;

    if(longitud > 8){
        dni = dni.substring(0,8);
        objdni.value = dni;
        longitud = 8;
        alert("error de dni")
        document.getElementById("dni").style.backgroundColor = 'cyan';
    }
}



function limitarCelular(){

    var objcelular;
    objcelular = document.getElementById("celular");

    var celular;
    celular = objcelular.value;

    var numero;
    numero = celular.length;

    if(numero > 9){
        celular = celular.substring(0,9);
        objcelular.value = celular;
        numero=9;
        alert("error de celular")
        document.getElementById("celular").style.backgroundColor = 'cyan';
    }
}



function comprar(){
    //suma de las unidades de pizza 
    
    let totalUnidad = 0;
    for (let i = 0; i < arrayUnidad.length; i++) {
        totalUnidad += parseInt(arrayUnidad[i]);
    }
    document.getElementById("total").innerHTML ="<strong>Total de unidades: </strong>" + totalUnidad;
    //suma del total con igv

    let totalIgv = 0;
    for (let i = 0; i < arrayTotalIgv.length; i++) {
        totalIgv += parseFloat(arrayTotalIgv[i]);
    }
    document.getElementById("totalIgv").innerHTML ="<strong>Precios con Igv: </strong>" + totalIgv;
}