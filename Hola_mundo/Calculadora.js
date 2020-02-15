'use strict'


/*
 Calculadora 

*/


var num1 = parseInt(prompt("introduzca el primer numero ", 0 )) ; 
var num2 = parseInt(prompt("introduzca el segundo numero ", 0 )) ; 


while (num1<0 || num2<0 || isNaN(num1)||isNaN(num2)) {

     num1 = parseInt(prompt("introduzca el primer numero ", 0 )) ; 
     num2 = parseInt(prompt("introduzca el segundo numero ", 0 )) ;


}


var resultado = "La suma es : " + (num1 +num2 ) + "<br/>" + 
"La resta es : " + (num1  - num2 ) + "<br/>" +
"El producto  es : " + (num1*num2 ) + "<br/>" +
"El cociente  es : " + (num1/num2 ) + "<br/>" ;


var resultadoCMD = "La suma es : " + (num1 +num2 ) + "\n" + 
"La resta es : " + (num1  - num2 ) + "\n" +
"El producto  es : " + (num1*num2 ) + "\n" +
"El cociente  es : " + (num1/num2 ) + "\n" ;

document.write(resultado) ; 
alert(resultadoCMD);