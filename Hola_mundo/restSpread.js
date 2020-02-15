'use strict'

// parametros de rest y spread 

function listadoFrutas(fruta1,fruta2,...resto ) { 
    console.log(" Fruta 1 : " + fruta1) ; 
    console.log(" Fruta 2 : " + fruta2) ; 
    console.log(" Resto de frutas : " + resto) ; 




}

listadoFrutas("manzana", "banana", "pera","uva")

var frutas = ["manzana", "banana"]

listadoFrutas(...frutas, "pera","uva")
