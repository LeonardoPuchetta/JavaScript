'use strict'
//recibe dos numeros y nos dice su relacion (mayor , menor o  igual )
var numero1=prompt("ingresar primer numero " , 0);
var numero2=prompt("ingresar segundo numero " , 0);
if (numero1<numero2){
    console.log("el mayor numero es " + numero2);
    console.log("el menor numero es " + numero1)
} else if (numero1>numero2){
    console.log("el mayor numero es " + numero1);
    console.log("el menor numero es " + numero2)
} if (numero1== numero2){
    console.log("ambos numeros son iguales")
   
} else {alert("introduce numeros correctos")}
