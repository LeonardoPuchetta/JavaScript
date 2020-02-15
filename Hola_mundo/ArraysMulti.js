'use strict'



var categorias = ['Terror' , 'Drama' , 'Belica' , 'Comedia' , 'Argentina'];


var peliculas = ['Viernes 13' , 'Malamente' , 'WW2' , 'Adam' , 'El secreto']; 

//genera una matriz con 2 filas 

var cine = [categorias, peliculas];

/*
console.log(cine); 
console.log(cine[0]); // fila 0 
console.log(cine[1]); // fila 1 

console.log(cine[0][1]); // Drama

*/
 // metodo ferruco 
peliculas[peliculas.length] = 'Batman' ; 

console.log(peliculas) ; 

// metodo push 
peliculas.push = '1917' ; 
console.log(peliculas) ;

// anadir desde el usuario 
/*
var elemento = prompt("Ingresar pelicula nueva ") ; 

while (elemento != "ACABAR") {
    
    peliculas.push=elemento;
    elemento = prompt("Ingresar pelicula nueva ");
}
*/

console.log(peliculas) ;

// buscar en un array una pelicula 

var indice = peliculas.indexOf('El secreto'); 

console.log(indice); 

if (indice>-1) {
    //splice nos permite borrar una cantidad de 
    //elementos a partir de un indice . 
peliculas.splice(indice, 1) ; 

}

var texto = peliculas.join();

console.log(peliculas);
console.log(texto);

var cadena = "texto 1 , textualmente , textura , tecnologia"

var cadena_array = cadena.split(", ");
console.log(cadena_array) ; 

// ordena el array por default alfabeticamente 

peliculas.sort();
console.log(peliculas);

//invertir elementos de un array 

peliculas.reverse();
console.log(peliculas);

// recorrida de una array con forin 

for (let pelicula in peliculas){
document.write("<li>" + peliculas[pelicula] + "</li>")

}

document.write("</ul>")
// una forma de buscar , con funcion de callback 
var busqueda = peliculas.find(function(pelicula){

return pelicula== 'Malamente'
})

console.log(busqueda) ; 

// con funcion flecha 

var busqueda = peliculas.find(pelicula => pelicula=='Malamente');

    console.log(busqueda) ; 

    
// con funcion flecha para sacar el indice 

var busqueda = peliculas.findIndex(pelicula => pelicula=='Malamente');

console.log(busqueda) ; 

// filtracion de valores 

var precios = [15 , 12, 85, 125 , 300 , 1546 ];

var busqueda2 = precios.some(precio => precio >= 100033) ; 
console.log(busqueda2); 

