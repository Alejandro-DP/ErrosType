// JavaScript source code
/*
var termino = prompt("Ingresa cuantos terminos requieres");
var valor = prompt("Ingresa el valor de x");
*/

function factorial(a) {
    if (a === 0) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

function obtenerDatos() {

    var termino = document.getElementById("elementos").value;
    var valor = document.getElementById("valorx").value;

    var t = parseInt(termino);
    var e = parseInt(valor);

    for (i = 1; i <= t; i++) {
        e = e + 1 / factorial(i);
    }

    alert("El resultado es: " + e);
}