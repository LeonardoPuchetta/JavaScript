'use strict'

// nos dice si un numero es par o impar 
// si no es valido nos vuelve a pedir el numero 


var num = parseInt(prompt("introduce un numero valido " , 0 ));

while (isNaN(num)){

    num = parseInt(prompt("introduce un numero valido " , 0 ));

}

if (num%2 == 0 ) {
alert("El numero introducido es par ")

}else {alert ("El numero introducido es impar ")}