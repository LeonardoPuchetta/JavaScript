'use strict'


// transformacion de texto 

var texto1 = "Bienvenido";
var numero = 444 ;  
var texto2 = "Gracias por todo , chau  ";


// transformacion de numero a string 
numero.toString(); 

console.log(typeof numero); 

//convertir texto a mayusculas 

console.log(texto1.toUpperCase());

//convertir texto a minusculas 

console.log(texto1.toLowerCase());

// calcular longitud de un texto 

console.log(texto1.length);

// concatenar o unir texto 

var textototal= texto1 + " y " +  texto2 ; 
var textototal2= texto1.concat(" y " + texto2);
console.log(textototal);
console.log(textototal2);