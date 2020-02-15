'use strict'

// muestra todos los divisores de un numero introducido 

var num = parseInt(prompt("introduce el numero elegido" , 0 ));

for (var i = 1 ; i<= num ; i++) {
if (num%i == 0){

    console.log(i);

}


}