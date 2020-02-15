'use strict'
// mostrar todos los impares entre dos numeros

var num1= parseInt(prompt("introduce el primer numero", 0 ));
var num2= parseInt(prompt("introduce el segundo numero", 0 ));

while (num1<num2) {

    num1++;

if (num1%2 != 0) {
console.log("el " + num1 + " es un numero impar ")

}

}

