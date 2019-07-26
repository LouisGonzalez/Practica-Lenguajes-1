var numero1 = document.getElementById("no1");
var historial = document.getElementById("historial");
var historial2 = document.getElementById("historial2");
var historial3 = document.getElementById("historial3");
var historial4 = document.getElementById("historial4");

function funcion(){
    alert("funciono " + numero1.value);
    historial.innerHTML = historial.innerHTML + numero1.value + "<br>"; 
}   

function separarCadena(){
    var valor = numero1.value.length;
    alert("la palabra es "+numero1.value);
    
    if(/^[a-z][a-z]*/.test(numero1.value[0])==false && isNaN(numero1.value)==true && /^[!-*][!-*]*/.test(numero1.value)==false){
        alert("La palabra inicia con un numero y tiene ademas letras");
        for(var i=0; i<numero1.value.length; i++){
            historial4.innerHTML = historial4.innerHTML + numero1.value[i]+" ";
        }
    }  
    if(isNaN(numero1.value)==false){
        alert("la palabra solo tiene numeros");
        for(var i=0; i<numero1.value.length; i++){
            historial2.innerHTML = historial2.innerHTML + numero1.value[i]+" ";
        }
    } else if (isNaN(numero1.value)==true && /^[a-z][a-z]*/.test(numero1.value[0])==true){
        alert("La palabra es un identificador");
        for(var i=0; i<numero1.value.length; i++){     
            historial.innerHTML = historial.innerHTML + numero1.value[i]+" ";  
        }
    }
    if((/^[!-*]{0,10}$/.test(numero1.value))){
        alert("La palabra es un simbolo");   
        for(var i=0; i<numero1.value.length; i++){
            historial3.innerHTML = historial3.innerHTML + numero1.value[i]+" ";
        }  
    }
   
    historial.innerHTML = historial.innerHTML + "<br>";
    
}