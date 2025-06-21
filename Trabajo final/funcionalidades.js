// Leer productos desde localStorage
const productosGuardados = JSON.parse(localStorage.getItem('productos'));

// Leer carrito de compras desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito'));

//variables globales para la compra:
let costoEnvio = 0;
let descuento = 0;

//mostrar por pantalla productos destacados
mostrarProductos(obtenerDestacados(productosGuardados), "destacados");
mostrarProductos(obtenerDiaDelPadre(productosGuardados), "diaPadre");
mostrarProductos(productosGuardados, "filtros");

//mostrar por pantalla productos del dia del padre


//crea productos destacados 
function obtenerDestacados(productos) {
    return productos.filter(p => p.esDestacado === "si");
}

//crea productos del dia del padre 
function obtenerDiaDelPadre(productos) {
    return productos.filter(p => p.esDiaDelPadre === "si");
}

function mostrarProductos(productosGuardados, id) {
    if (productosGuardados && productosGuardados.length > 0) {
        var contenedorProductos = document.getElementById(id);
        if (contenedorProductos != null) {
            productosGuardados.forEach(producto => {
                const tarjeta = document.createElement('div');
                const precio = parseFloat(producto.precio);
                tarjeta.className = 'tarjeta';
                tarjeta.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="tarjeta-contenido">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p class="precio">$${precio.toLocaleString("es-AR", { minimumFractionDigits: 2 })}</p>
                        <button class="boton-carrito">Añadir al carrito</button>
                    </div>
                `;

                // Agregar evento al botón
                const boton = tarjeta.querySelector('.boton-carrito');
                boton.onclick = function () {
                    agregarAlCarrito(producto);
                };

                //colocamos la tarjeta en el contenedor
                contenedorProductos.appendChild(tarjeta);
            });
        }
    }
}

function filtrarPorCategoria(categoria) {

    var productosFiltrados;

    if (categoria === "todas") {
        productosFiltrados = productosGuardados;
    } else {
        productosFiltrados = productosGuardados.filter(p => p.categoria === categoria);
    }

    // Limpiar el contenedor antes de volver a mostrar
    const contenedor = document.getElementById("filtros");
    contenedor.innerHTML = "";

    mostrarProductos(productosFiltrados, "filtros");
}

function agregarAlCarrito(producto) {
    // Verificamos si ya está en el carrito
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        existe.cantidad += 1; // Aumentamos la cantidad
    } else {
        producto.cantidad = 1; // agregamos el producto al carrito con la cantidad = 1
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`"${producto.nombre}" se añadió al carrito.`);
    actualizarContadorCarrito()
}

function mostrarCarrito() {

    const tabla = document.getElementById("carritoTable").getElementsByTagName('tbody')[0];

    tabla.innerHTML = ""; // Limpiar tabla antes de mostrar

    carrito.forEach((producto, i) => {
        const fila = tabla.insertRow();

        // Imagen
        const celdaImagen = fila.insertCell();
        celdaImagen.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">`;

        // Nombre
        const celdaNombre = fila.insertCell();
        celdaNombre.innerHTML = producto.nombre;

        // Precio
        const celdaPrecio = fila.insertCell();
        const precio = parseFloat(producto.precio);
        celdaPrecio.innerHTML = "$" + precio.toLocaleString("es-AR", { minimumFractionDigits: 2 });

        // Cantidad como input number
        const celdaCantidad = fila.insertCell();
        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.min = "1";
        inputCantidad.value = producto.cantidad;
        inputCantidad.onchange = function () {
            actualizarCantidad(i, parseInt(inputCantidad.value));
        }
        /*inputCantidad.addEventListener("change", function () {
            actualizarCantidad(i, parseInt(inputCantidad.value));
        }); */

        celdaCantidad.appendChild(inputCantidad);

        // Botón Eliminar
        const celdaAccion = fila.insertCell();
        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "Eliminar";
        botonEliminar.className = "boton-eliminar";
        botonEliminar.onclick = function () {
            eliminarDelCarrito(i);
        };
        celdaAccion.appendChild(botonEliminar);
    });
    calcularTotal()
}


function eliminarDelCarrito(i) {

    carrito.splice(i, 1); // Eliminar 1 elemento desde el índice i del carrito de compras
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito()
    mostrarCarrito();
}

function actualizarCantidad(i, nuevaCantidad) {
    //la cantidad nunca es 0
    if (nuevaCantidad < 1) nuevaCantidad = 1;
    carrito[i].cantidad = nuevaCantidad;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();
    actualizarContadorCarrito()
}

function calcularTotal() {
    let subtotal = 0;

    carrito.forEach(producto => {
        const precio = parseFloat(producto.precio);
        subtotal += precio * producto.cantidad;
    });

    const montoDescuento = subtotal * descuento;
    const totalFinal = subtotal + costoEnvio - montoDescuento;

    // Actualizar los elementos
    document.getElementById("subtotal-productos").innerHTML = `$${subtotal.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
    document.getElementById("costo-envio").innerHTML = `$${costoEnvio.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
    document.getElementById("descuento-aplicado").innerHTML = `- $${montoDescuento.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
    document.getElementById("total-final").innerHTML = `$${totalFinal.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
}


function mostrarCampoCodigoPostal() {
    const metodo = document.getElementById("metodo-envio").value;
    const contenedor = document.getElementById("datos-envio");

    if (metodo === "envio") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }
    costoEnvio = 0;
    calcularTotal();
    document.getElementById("resultado-envio").innerHTML = "";
}

function calcularCostoEnvio() {
    const codigoPostal = document.getElementById("codigo-postal").value;
    const resultado = document.getElementById("resultado-envio");
    const costo = calculoDeEnvio(codigoPostal);

    if (costo !== -1) {
        resultado.innerHTML = `Valor de envío a Correo Argentino es de:<b> $${costo}</b>`;
        costoEnvio = costo;
    } else {
        resultado.innerHTML = "Código postal no encontrado.";
        costoEnvio = 0;
    }
    calcularTotal()
}


function calculoDeEnvio(codigoPostal) {
    var codigos = ["1000", "1704", "7600", "5000", "4000", "5500", "2000", "3400", "3500", "8300", "8328"];
    var montos = [1500, 2000, 2500, 3000, 3500, 4000, 5000, 3800, 1234, 6500, 0];
    var valor = -1;
    for (let i = 0; i < codigos.length; i++) {
        if (codigoPostal === codigos[i]) {
            return montos[i];
        }
    }
    return valor;
}

function verificarCodigoPromocional() {
    var codigos = ["desc50", "desc75", "desc10"];
    var descuentos = [0.5, 0.75, 0.10];
    const resultado = document.getElementById("resultado-codigo")
    const codigo = document.getElementById("codigo-promocional").value.trim().toLowerCase();
    encontroDescuento = false;

    for (let i = 0; i < codigos.length; i++) {
        if (codigo === codigos[i]) {
            descuento = descuentos[i]
            encontroDescuento = true;
            resultado.innerHTML = "<span style='color:green'>¡Descuento del " + (descuentos[i] * 100) + "% aplicado!</span>"
        }
    }

    if (!encontroDescuento) {
        descuento = 0;
        resultado.innerHTML = "<span style='color:red; font-weight:bold;'>¡Ingrese un código válido!</span>";
    }

    calcularTotal();
}

function verificarAntesDeAbonar() {

    const metodo = document.getElementById("metodo-envio");
    const codigoPostal = document.getElementById("codigo-postal");
    const totalFinal = document.getElementById("total-final"); //el texto que dice el total final
    const costoEnvio = document.getElementById("costo-envio"); //el texto que indica el costo del envio 
    const errorEscrito = document.getElementById("error-carrito");


    limpiar(metodo);
    limpiar(codigoPostal);
    errorEscrito.innerHTML = "";

    if (metodo.value === "default") {
        error(metodo);
        errorEscrito.innerHTML = "Coloque un método de entrega";
        return;
    }

    if (metodo.value === "envio" && codigoPostal.value === "") {
        error(codigoPostal)
        errorEscrito.innerHTML = "Escriba su código postal";
        return;
    }

    if (metodo.value === "envio" && costoEnvio.textContent === "$0,00") {
        errorEscrito.innerHTML = "Calcule el envio";
        return;
    }

    if (totalFinal.textContent === "$0,00") {
        errorEscrito.innerHTML = "Compre algo por favor";
        return;
    }

    // Si pasa las validaciones
    alert("¡Gracias por tu compra! Procesando pago...");

}

function error(elem) {
    elem.style.backgroundColor = "#FFA9A9";
    elem.style.border = "2px solid red";
    // Marcar que hay errores

}
//limpia los errores que quedaron de antes
function limpiar(elem) {
    elem.style.backgroundColor = "";
    elem.style.border = "";

}

function actualizarContadorCarrito() {
    var totalCantidad = 0;
    const contador = document.getElementById("contador-carrito");
    carrito.forEach(prod => {
        totalCantidad += prod.cantidad;
    });
    contador.innerHTML = totalCantidad;

}

/*********************************************
 *                                           *
 *           SERVICIO TÉCNICO                *
 *     Formulario de solicitud de ayuda      *
 *                                           *
 *********************************************/

function mostrarOpcionesServicio() {
    const tipo = document.getElementById("tipo-servicio").value;
    const mantenimiento = document.getElementById("opciones-mantenimiento");
    const reparacion = document.getElementById("opciones-reparacion");

    // Ocultar ambos por defecto
    mantenimiento.style.display = "none";
    reparacion.style.display = "none";

    // Mostrar el que corresponda
    if (tipo === "mantenimiento") {
        mantenimiento.style.display = "block";
    } else if (tipo === "reparacion") {
        reparacion.style.display = "block";
    }
}

function verificarServicioTecnico() {
    let valido = true;

    const emailError = document.getElementById("emailValido");
    const telefonoError = document.getElementById("telefonoValido");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const mail = document.getElementById("mail");
    const telefono = document.getElementById("telefono");
    const tipoComputadora = document.getElementById("tipo-pc");
    const tipoServicio = document.getElementById("tipo-servicio");

    // Limpiar errores previos

    const campos = [nombre, apellido, mail, telefono, tipoServicio, tipoComputadora];
    emailError.innerHTML = "";
    telefonoError.innerHTML = "";

    campos.forEach(limpiar);

    campos.forEach(campo => {
        if (campo.value === "") {
            error(campo);
            valido = false;
        }
    });

    if (!verificarMail(mail.value)) {
        error(mail);
        emailError.innerHTML = "Colocar un mail válido, que tenga @ y un .";
        valido = false;
    }

    if (!esSoloNumeros(telefono.value)) {
        error(telefono);
        telefonoError.innerHTML = "Colocar un numero de telefono valido, sin - / o alguna otra letra";
        valido = false;
    }



    // Validaciones específicas si es mantenimiento o instalación
    if (tipoServicio.value === "mantenimiento") {
        let errorCheck = document.getElementById("check-obligatorio");
        errorCheck.innerHTML = "";
        //me da una lista de nodos con todos los inputs checkbox de la parte de mantenimiento
        const checkboxes = document.querySelectorAll("#opciones-mantenimiento input[type='checkbox']");
        let alMenosUnoMarcado = false;

        checkboxes.forEach(c => {
            if (c.checked) alMenosUnoMarcado = true;
        });

        if (!alMenosUnoMarcado) {
            errorCheck.innerHTML = "Debe seleccionar al menos una opción de mantenimiento o instalación.";
            valido = false;
        }
    }

    //validaciones si es de tipo reparacion 
    if (tipoServicio.value === "reparacion") {
        const problema = document.getElementById("problema");
        const componente = document.getElementById("componente");
        const urgencia = document.getElementById("urgencia");
        const camposR = [problema, componente, urgencia];

        camposR.forEach(limpiar);

        camposR.forEach(campo => {
            if (campo.value === "") {
                error(campo);
                valido = false;
            }
        });
    }

    if (valido) {
        alert("Solicitud enviada correctamente. En estos dias el comercio se comunicara con vos por mail informandote los siguientes pasos");
    }

    return valido;
}

//Verifica si el email tiene @ y luego un .
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

/*********************************************
 *                                           *
 *                ARMA TU PC                 *
 *     En esta parte va todo lo relacionado  *
 *          al armado de la pc               *
 *                                           *
 *********************************************/

const pasosArmado = ["cpu", "mother", "ram", "almacenamiento", "placa", "fuente", "gabinete", "periferico"];
let componentesSeleccionados = []; // se va llenando con los productos seleccionados por paso
let totalArmado = 0;

function iniciarArmado() {
    mostrarPaso(0);
    actualizarResumen();
}

function mostrarPaso(indice) {
    const categoriaActual = pasosArmado[indice];
    document.getElementById("titulo-paso").textContent = `Seleccioná tu ${categoriaActual.toUpperCase()}`;

    let productosPaso = productosGuardados.filter(p => p.categoria === categoriaActual);

    // Compatibilidad básica
    if (categoriaActual === "mother" && componentesSeleccionados[0]) {
        productosPaso = productosPaso.filter(p => p.socket === componentesSeleccionados[0].socket);
    }

    if (categoriaActual === "ram" && componentesSeleccionados[1]) {
        productosPaso = productosPaso.filter(p => p.tipo === componentesSeleccionados[1].ram);
    }
    if (categoriaActual === "placa" && componentesSeleccionados[1]) {
        productosPaso = productosPaso.filter(p => p.gpuInterface === componentesSeleccionados[1].gpu);
    }


    // Ordenar por precio
    productosPaso.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));

    const tbody = document.getElementById("tabla-cuerpo-paso");
    tbody.innerHTML = "";

    if (productosPaso.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5"><b>No hay productos compatibles.</b></td></tr>`;
        return;
    }

    productosPaso.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
      <td><img src="${producto.imagen}" alt="${producto.nombre}" width="80"></td>
      <td>${producto.nombre}</td>
      <td>${producto.descripcion}</td>
      <td>$${parseFloat(producto.precio).toLocaleString()}</td>
      <td><button class="boton-select-armarPC" onclick="seleccionarComponente(${indice}, ${producto.id})">Seleccionar</button></td>
    `;

        tbody.appendChild(fila);
    });
}

function seleccionarComponente(indice, idProducto) {
    const producto = productosGuardados.find(p => p.id === idProducto);
    componentesSeleccionados[indice] = producto;
    actualizarResumen();
    if (indice + 1 < pasosArmado.length) {
        mostrarPaso(indice + 1);
    } else {

    }
}


function actualizarResumen() {
    const ul = document.getElementById("lista-componentes");
    const total = document.getElementById("total-armado");

    ul.innerHTML = "";
    let totalArmado = 0;

    for (let i = 0; i < componentesSeleccionados.length; i++) {
        const prod = componentesSeleccionados[i];
        if (prod) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${pasosArmado[i].toUpperCase()}:</strong> ${prod.nombre} - $${parseFloat(prod.precio).toLocaleString("es-AR")}`;
            ul.appendChild(li);
            totalArmado += parseFloat(prod.precio);
        }
    }

    total.innerHTML = `${totalArmado.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
}

function agregarAlCarritoArmado() {
    for (let comp of componentesSeleccionados) {
        agregarAlCarrito(comp);
    }
    alert("Componentes añadidos al carrito");
}

function volverUnPaso() {
    //se elimina el ultimo elemento del arreglo, se actualiza el resumen y se vuelve atras un paso. 
    if (componentesSeleccionados.length > 0) {
        componentesSeleccionados.pop();
        actualizarResumen();
        mostrarPaso(componentesSeleccionados.length);
    }

}

/*
Cosas que faltan:
-Falta filtrar por almacenamiento de la placa 
-agregar mas componentes 
-modificar la parte final: 
    +Que se agreguen mas perisfericos y que sean opcionales
    +mostrar que la pc ya está armada 
*/

