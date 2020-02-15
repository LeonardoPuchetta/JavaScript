'use strict'
// muestra suma y media de numeros ingresados  utilizando un bucle 

var suma = 0 ;
var contador = 0 ; 
var media=0;

do  {

var numero = parseInt(prompt("introduce un numero", 0));
if (isNaN(numero)){
    suma=0;
    media=0;
    alert("no has introducido un numero ")

} else if (numero>=0) {

contador++ ; 
suma += numero ; 
media = suma / contador ; 


}

alert("La suma actual  es : " +" "+ suma );
alert("la media actual  es : " + " "+  media );

} while ( numero>=0 )
