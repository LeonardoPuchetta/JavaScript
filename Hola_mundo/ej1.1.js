'use strict'
//recibe dos numeros y nos dice su relacion (mayor , menor o  igual )
// si los numeros no son correctos los volvera a pedir
var numero1=parseInt(prompt("ingresar primer numero " , 0));
var numero2=parseInt(prompt("ingresar segundo numero " , 0));

while (numero1<=0||numero2<=0||isNaN(numero1) ||isNaN(numero2)){
    alert("introduce numeros correctos")
    numero1=parseInt(prompt("ingresar primer numero " , 0));
    numero2=parseInt(prompt("ingresar segundo numero " , 0));

}


if (numero1<numero2){
    console.log("el mayor numero es " + numero2);
    console.log("el menor numero es " + numero1)
} else if (numero1>numero2){
    console.log("el mayor numero es " + numero1);
    console.log("el menor numero es " + numero2)
} else if (numero1== numero2){
    console.log("ambos numeros son iguales")
   
} else {alert("introduce numeros correctos")}

