function sumar() {
    input = document.getElementById("n1");
    n1 = input.value;
    input = document.getElementById("n2");
    n2 = input.value;
    var suma = parseInt(n1) + parseInt(n2);
    salida = document.getElementById("salida");
    salida.value += n1 + '+' + n2 + '=' + suma + '\n'; //agrega al text area el relsultado de la suma
}

function restar() {
    input = document.getElementById("n1");
    n1 = input.value;
    input = document.getElementById("n2");
    n2 = input.value;
    var resta = parseInt(n1) - parseInt(n2);
    salida = document.getElementById("salida");
    salida.value += n1 + '-' + n2 + '=' + resta + '\n'; //agrega al text area el relsultado de la resta
}

function multiplicar() {
    input = document.getElementById("n1");
    n1 = input.value;
    input = document.getElementById("n2");
    n2 = input.value;
    var mult = parseInt(n1) * parseInt(n2);
    salida = document.getElementById("salida");
    salida.value += n1 + '*' + n2 + '=' + mult + '\n'; //agrega al text area el relsultado de la multiplicación
}

function dividir() {
    input = document.getElementById("n1");
    n1 = input.value;
    input = document.getElementById("n2");
    n2 = input.value;
    if (n2 != 0) {
        var div = parseInt(n1) / parseInt(n2);
        salida = document.getElementById("salida");
        salida.value += n1 + '/' + n2 + '=' + div + '\n'; //agrega al text area el relsultado de la división
    } else {
        alert("El segundo número es 0, no se puede dividir");
    }

}

function potenciar() {
    input = document.getElementById("n1");
    n1 = input.value;
    input = document.getElementById("n2");
    n2 = input.value;
    var pow = Math.pow(n1, n2);
    salida = document.getElementById("salida");
    salida.value += n1 + '^' + n2 + '=' + pow + '\n'; //agrega al text area el relsultado de la potencia

}

function hacerCuadrado() {
    input = document.getElementById("n1");
    n1 = input.value;
    var pow = Math.pow(n1, 2);
    salida = document.getElementById("salida");
    salida.value += n1 + '^2' + '=' + pow + '\n'; //agrega al text area el relsultado de la potencia

}

function convertir() {
    var input = document.getElementById("num");
    var valor = input.value;
    var resultado;
    salida = document.getElementById("salidaC");
    var select = document.getElementById("selectValores");
    //la opcion selecionada va a agarrar el elemento options 
    var opcionSeleccionada = select.options[select.selectedIndex];

    switch (opcionSeleccionada.value) {
        case "PD":
            resultado = valor / 1200;
            salida.value += '$' + valor + 'ARS seria un total de $' + resultado.toFixed(2) + 'USD \n';
            break;
        case "DP":
            resultado = valor * 1200;
            salida.value += '$' + valor + 'USD seria un total de $' + resultado.toFixed(2) + 'ARS \n';
            break;
        case "PR":
            resultado = valor / 209, 98;
            salida.value += '$' + valor + 'ARS seria un total de $' + resultado.toFixed(2) + ' Reales \n';
            break;
        case "RP":
            resultado = valor * 209, 98;
            salida.value += '$' + valor + ' Reales seria un total de $' + resultado.toFixed(2) + 'ARS \n';
            break;
        case "PE":
            resultado = valor / 1.347, 52;
            salida.value += '$' + valor + 'ARS seria un total de $' + resultado.toFixed(2) + ' Euros \n';
            break;
        case "EP":
            resultado = valor * 1.347, 52;
            salida.value += '$' + valor + ' Euros seria un total de $' + resultado.toFixed(2) + 'ARS \n';
            break;
        default:
            alert("Selecciona algo che pibe");
    }

}

function valorSeleccionado() {
    input = document.getElementById("n1");
    n1 = parseInt(input.value);
    salida = document.getElementById("salida");
    switch (true) {
        case (n1 < 0):
            salida.value += 'El valor es: -1 \n';
            break;
        case (n1 >= 0 && n1 < 10):
            salida.value += 'El valor es: 0 \n';
            break;
        case (n1 >= 10 && n1 < 50):
            salida.value += 'El valor es: 1 \n';
            break;
        case (n1 >= 50 && n1 < 100):
            salida.value += 'El valor es: 2 \n';
            break;
        case (n1 >= 100):
            salida.value += 'El valor es: 3 \n';
            break;
        default:
            salida.value += 'Inserte valor en número 1 \n';
            break;


    }
}

function hacerFactorial() {
    var input = document.getElementById("n1");
    var n1 = parseInt(input.value);
    var salida = document.getElementById("salida");
    var res = factorial(n1);
    salida.value += 'El factorial de ' + n1 + ' es: ' + res + '\n';

}

function factorial(n) {
    if(n<=0){
        return 1;
    } else { 
        n = n * factorial(n-1);
    }
    return n; 
}



