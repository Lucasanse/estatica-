
var tieneErrores;

function validar() {
    tieneErrores = false;
    var campos = ["nombre", "apellido", "email", "obras_sociales", "dia", "mes", "anio"]
    var camposObj = [];
    for (let i = 0; i < campos.length; i++) {
        camposObj[i] = document.getElementById(campos[i]);
    }

    /*
    Posiciones del arreglo:
     camposObj[0] el nombre
     camposObj[1] el apellido
     camposObj[2] el mail
     camposObj[3] las obras sociales
     camposObj[4] el dia
     camposObj[5] el mes
     camposObj[6] el año
    */

    //si antes había errores, vuelve todo a la normalidad 
    for (let i = 0; i < camposObj.length; i++) {
        limpiar(camposObj[i])
    }

    // Validar campos obligatorios
    for (let i = 0; i < camposObj.length; i++) {
        if (camposObj[i].value === "") {
            error(camposObj[i]);
        }
    }
    //verificar el mail
    if (!verificarMail(camposObj[2].value)) {
        error(camposObj[2]);
    }

    //verificar que la fecha sean enteros positivos  
    var dia = parseInt(camposObj[4].value);
    var mes = parseInt(camposObj[5].value);
    var anio = parseInt(camposObj[6].value);

    //
    if (!esSoloNumeros(camposObj[4].value) || dia < 1) {
        error(camposObj[4]);
    }

    if (!esSoloNumeros(camposObj[5].value) || mes < 1) {
        error(camposObj[5]);
    }

    if (!esSoloNumeros(camposObj[6].value) || anio < 1) {
        error(camposObj[6]);
    }

    //verificar que la fecha sea correcta 
    if (!verificarFecha(dia, mes, anio)) {
        error(camposObj[4]);
        error(camposObj[5]);
        error(camposObj[6]);
    }



    if (!tieneErrores) {
        alert("Todos los datos son correctos");
        var div = document.getElementById("divUsoOpcional");
        div.innerHTML = "";
    } else {
        var div = document.getElementById("divUsoOpcional");
        div.style.color = "red";
        div.style.fontSize = "20px";
        div.style.margin = "10px";
        div.innerHTML = "Verifique que sus datos sean correctos";
    }


}

//funciones de utilidad

function error(elem) {
    elem.style.backgroundColor = "#FFA9A9";
    elem.style.border = "2px solid red";
    // Marcar que hay errores
    tieneErrores = true;

}

function limpiar(elem) {
    elem.style.backgroundColor = "";
    elem.style.border = "";
}

function verificarMail(cadena) {
    var res = true;
    var partes = cadena.split("@");

    // partes divide un arreglo en 2, en la parte 1 tiene el nombre y en la parte 2 el dominio. Todo esto es dividido por el @
    if (partes.length !== 2 || partes[0] === "" || partes[1].indexOf(".") < 1) {
        res = false;
    }

    return res;
}

//funcion que dada la una cadena, nos devuelve true si son todos numeros
//en caso de que sean todos numeros, quiere decir que el numero es un entero positivo.
function esSoloNumeros(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] < '0' || cadena[i] > '9') {
            return false;
        }
    }
    return true;
}



function verificarFecha(dia, mes, anio) {
    var res = true;
    if (mes < 0 || mes > 12) {
        res = false;
    } else {
        var diasDeLosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (esBisiesto(anio)) {
            diasDeLosMeses[1] = 29;
        }
        if (dia < 1 || dia > diasDeLosMeses[mes - 1]) {
            res = false;
        }
    }
    return res;

}

function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

