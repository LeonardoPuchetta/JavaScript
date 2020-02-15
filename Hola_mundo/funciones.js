'use strict'

// funciones 

//var num1= prompt("inserte primer numero" , 0);
//var num2=prompt("inserte segundo numero" , 0 );

function calculadora(num1,num2, mostrar= false) {
if (mostrar==false) {
    console.log(" Suma : " + ((num1)+(num2)) );
    console.log(" Resta : " + (num1-num2) );
    console.log(" Multiplicacion : " + (num1*num2) );
    
    console.log(" Division : " + (num1/num2) );
console.log("*****************************************************************")
}else {
    document.write(" Suma : " + ((num1)+(num2)) + "<br/>" );
    document.write(" Resta : " + (num1-num2)  + "<br/>" ) ;
   
   
    document.write(" Multiplicacion : " + (num1*num2)  + "<br/>") ;
   
    document.write(" Division : " + (num1/num2) +"<br/>");
document.write("*****************************************************************")
}


} 


calculadora(10,10,true);
calculadora(10,20,false);



