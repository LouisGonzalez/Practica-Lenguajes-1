var numero1 = document.getElementById("no1");
var historial = document.getElementById("historial");
var historial2 = document.getElementById("historial2");
var historial3 = document.getElementById("historial3");
var historial4 = document.getElementById("historial4");

//METODO QUE SE ENCARGA DE SEPARAR LA CADENA DE CARACTERES UNO POR UNO 
function separarCadena() { 
    var valor = numero1.value.length;
    if(/^[a-z][a-z]*/.test(numero1.value[0])==false && isNaN(numero1.value)==true && /^[!-*][!-*]*/.test(numero1.value)==false){
        for(var i=0; i<numero1.value.length; i++){
            historial4.innerHTML = historial4.innerHTML + numero1.value[i]+" ";
        }
        historial4.innerHTML = historial4.innerHTML + "<br>";
    }  
    if(isNaN(numero1.value)==false){
        for(var i=0; i<numero1.value.length; i++){
            historial2.innerHTML = historial2.innerHTML + numero1.value[i]+" ";
        }
        historial2.innerHTML = historial2.innerHTML + "<br>";
    
    } else if (isNaN(numero1.value)==true && /^[a-z][a-z]*/.test(numero1.value[0])==true){
        for(var i=0; i<numero1.value.length; i++){     
            historial.innerHTML = historial.innerHTML + numero1.value[i]+" ";  
        }
        historial.innerHTML = historial.innerHTML + "<br>";    
    }
    if((/^[!-*]{0,10}$/.test(numero1.value))){
        for(var i=0; i<numero1.value.length; i++){
            historial3.innerHTML = historial3.innerHTML + numero1.value[i]+" ";
        }
        historial3.innerHTML = historial3.innerHTML + "<br>";   
    }
    
}