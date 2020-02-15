'use strict'

function mostrarArray (arreglo, textoCustom ="") {
    document.write("<strong>" + textoCustom + "</strong></br>");

    for (let numero in arreglo ){
        document.write("<li>" + arreglo[numero] + "</li>")
        
        
        }
        document.write("</ul>")


}



// creamos array con 6 posiciones 
var numeros = new Array(3) ;
//creamos array vacio 
var cifras= [] ;


//pedimos al usuario ingresar numeros 

for (var i = 0 ; i<=2 ;i++ ){

numeros[i]= parseInt(prompt("ingrese un numero en el arreglo " , 0 )) ; 

};
/*
//pedimos al usuario ingresar cifras 

for (var i = 0 ; i<=2 ;i++ ){

cifras.push(parseInt(prompt("ingrese una cifra en el arreglo " , 0 ))) ; 
    
    };
 */   
// recorremos el array para mostrar sus elementos en pantalla 

document.write("<strong>" + "NUMEROS" + "</strong></br>");

for (let numero in numeros ){
    document.write("<li>" + numeros[numero] + "</li>")
    
    
    }
    document.write("</ul>")


// mostramos el arreglo en consola 

console.log(numeros);  

/*
// recorremos el array para mostrar sus elementos en pantalla 
 
document.write("<strong>" + "CIFRAS" + "</strong></br>");

for (let cifra in cifras ){
    document.write("<li>" + cifras[cifra] + "</li>")
   
    
    }
    document.write("</ul>")



// mostramos el arreglo en consola 

console.log(cifras);
*/


// ordenar y mostrar 

numeros.sort(function (a,b) {return a-b}) ; 
console.log(numeros) ; 
mostrarArray(numeros, "NUMEROS ORDENADOS ") ; 

// invertir y mostrar 

numeros.reverse();
mostrarArray(numeros,"NUMEROS INVERTIDOS") ; 



