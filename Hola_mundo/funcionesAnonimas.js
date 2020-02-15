'use strict'


// las funciones anonimas no tienen nombre ,
// se guardan instrucciones dentro de 
// una variable . 

var pelicula = function (nombre){

    return "La pelicula es de terror y se llama:  " + nombre;

}


function sumame (numero1,numero2,sumaYmuestra,sumaXdos)   {
    var sumar= numero1 + numero2;
    sumaYmuestra(sumar);
    sumaXdos(sumar);
    return sumar;

}

sumame (10,5, (dato)=> {+
    console.log("La suma es : " + dato ) 
} ,  (dato)=> { 
    console.log("La suma doble es :  " + dato*2)
} ) // invoco la funcion sumame 
