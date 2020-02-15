'use strict'

// tabla de multiplicar de numero introducido por pantalla 




var num = parseInt(prompt("De que numeros quieres la tabla ? " , 1 ));

document.writeln("<h1>" + "Tabla del "+ num +": " + "</h1>")

for (var i=1 ; i<=10 ; i++){

    document.writeln(i + " x " + num + "= " + i*num + "<br/>");
   

}