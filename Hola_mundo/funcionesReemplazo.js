'use strict'


var texto1 = " Bienvenido a mi casa, mi casa es tu casa ";
var numero = 444 ;  
var texto2 = "Gracias por todo , chau  ";

var busqueda= texto1.replace("casa", "casita") ; 
//reemplaza los textos indicados 

console.log(busqueda); 


var busqueda2= texto1.slice(12) ; 
//separa el string a partir del caracter indicado
//produciendo un nuevo string 

console.log(busqueda2);

var busqueda3= texto1.split(" ") ; 
//crea un array con las palabras de texto1 separadas por el caracter que le indiquemos  
// es este caso el caracter es un espacio 
console.log(busqueda3); 


var busqueda3= texto1.trim() ; 
//remueve los espacios al principio y al final del string  

console.log(busqueda3);