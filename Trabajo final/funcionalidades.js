// Leer productos desde localStorage
const productosGuardados = JSON.parse(localStorage.getItem('productos'));

// Leer carrito de compras desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito'));

//variables globales para la compra:
let costoEnvio = 0;
let descuento = 0;

//mostrar por pantalla productos destacados
function mostrarDestacados() {
    let destacados = productos.filter(p => p.esDestacado === "si");
    mostrarProductos(destacados, "destacados");
}

//mostrar por pantalla productos del dia del padre
function mostrarDiaDelPadre() {
    let pdp = productos.filter(p => p.esDiaDelPadre === "si");
    mostrarProductos(pdp, "diaPadre");
}

//mostrar por pantalla productos del dia del padre
function mostrarConFiltros() {
    mostrarProductos(productosGuardados, "filtros");
}

//muestra los productos en forma de tarjetas en el id donde querramos 
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
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        existe.cantidad += 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarNotificacionCarrito(`${producto.nombre} se añadió al carrito.`);
    actualizarContadorCarrito();
}

function mostrarNotificacionCarrito(mensaje) {
    const noti = document.getElementById("notificacion-carrito");
    noti.innerHTML = mensaje;

    //la notificacion se hace visible, se le agrega a la clase de notificacion-carrito el mostrar. 
    //mostrar lo hace visible y lo mueve un poco para arriba
    noti.classList.add("mostrar");
    noti.classList.remove("oculto");

    // Despues de 3 segundos se vuelve a ocultar 
    setTimeout(() => {
        noti.classList.remove("mostrar");
        noti.classList.add("oculto");
    }, 3000);
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

const pasosArmado = ["cpu", "mother", "ram", "almacenamiento", "placa", "fuente", "gabinete"];
let componentesSeleccionados = []; // se va llenando con los productos seleccionados por paso
let perifericosSeleccionados = []; // arreglo con perisfericos opcionales
let totalArmado = 0;

function iniciarArmado() {
    mostrarPaso(0);
    actualizarResumen();
}

function mostrarPaso(indice) {
    const categoriaActual = pasosArmado[indice];
    let productosPaso;
    let tituloPaso = document.getElementById("titulo-paso");

    //si ya se completaron todos los pasos de armados, se pasa a seleccionar perisfericos
    if (indice !== pasosArmado.length) {
        productosPaso = productosGuardados.filter(p => p.categoria === categoriaActual);
        tituloPaso.innerHTML = `Seleccioná tu ${categoriaActual.toUpperCase()}`
    } else {
        productosPaso = productosGuardados.filter(p => p.categoria === "periferico");
        tituloPaso.innerHTML = `<h2> ¡Ya tenés tu computadora lista! Agregá los perifericos que quieras</h2>
                                <p style="color:red;"> Aclaraciones: </p>
                                <ul>
                                    <li style="font-size: 20px;">Si querés añadir más almacenamiento podes comprarlo desde el apartado de "Productos"</li>
                                    <li style="font-size: 20px;">Recordá que el almacenamiento tiene que ser compatible con tu mother</li>
                                </ul>`
    }


    // compatibilidad de los productos
    if (categoriaActual === "mother" && componentesSeleccionados[0]) {
        productosPaso = productosPaso.filter(p => p.socket === componentesSeleccionados[0].socket);
    }
    if (categoriaActual === "ram" && componentesSeleccionados[1]) {
        productosPaso = productosPaso.filter(p => p.tipo === componentesSeleccionados[1].ram);
    }
    //Filtra las placas solo si su versión PCIe es menor o igual a la que soporta la mother.
    if (categoriaActual === "placa" && componentesSeleccionados[1]) {
        const versionMother = parseFloat(componentesSeleccionados[1].PCIe);
        productosPaso = productosPaso.filter(p => {
            const versionPlaca = parseFloat(p.gpuInterfacePCIe);
            return versionPlaca <= versionMother;
        });
    }
    if (categoriaActual === "almacenamiento" && componentesSeleccionados[1]) {
        const tiposCompatibles = componentesSeleccionados[1].almacenamiento;
        productosPaso = productosPaso.filter(p => tiposCompatibles.includes(p.tipo));
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
              `;
        //El boton que se añade en la tabla depende si estamos eligiendo componentes o perifericos
        if (indice !== pasosArmado.length) {
            fila.innerHTML += `<td><button class="boton-select-armarPC" onclick="seleccionarComponente(${indice}, ${producto.id})">Seleccionar</button></td>`
        } else {
            //vemos si ya esta agregado en el array de perifericosSeleccionados
            const yaAgregado = perifericosSeleccionados.some(p => p.id === producto.id);
            var textoBoton = "Agregar";
            if (yaAgregado) {
                textoBoton = "Quitar";
            }
            fila.innerHTML += `<td><button class="boton-select-armarPC" onclick="alternarPeriferico(${producto.id})">${textoBoton}</button></td>`
        }



        tbody.appendChild(fila);
    });

    if (categoriaActual === "placa") {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td colspan="4"><b>Prefiero no agregar una placa de video</b></td>
            <td><button class="boton-select-armarPC" onclick="seleccionarComponente(${indice}, ${0})">Seleccionar</button></td> `;
        tbody.appendChild(fila);
    }

}

//

function seleccionarComponente(index, idProducto) {
    var producto;
    //si el producto es de ID 0, no existe (ejemplo de la placa de video que es opcional)
    if (idProducto !== 0) producto = productosGuardados.find(p => p.id === idProducto);
    else producto = 0;
    componentesSeleccionados[index] = producto;
    actualizarResumen();
    if (index + 1 < pasosArmado.length) {
        mostrarPaso(index + 1);
    } else {
        mostrarPaso(pasosArmado.length);

    }
}


function actualizarResumen() {
    let ul = document.getElementById("lista-componentes");
    let total = document.getElementById("total-armado");
    let li;

    ul.innerHTML = "";
    let totalArmado = 0;

    //se actualizan los componentes. Si el prod = 0, quiere decir que el usuario no selecciono nada 
    componentesSeleccionados.forEach((prod, i) => {
        li = document.createElement("li");
        if (prod !== 0) {
            li.innerHTML = `<strong>${pasosArmado[i].toUpperCase()}:</strong> ${prod.nombre} - $${parseFloat(prod.precio).toLocaleString("es-AR")}`;
            totalArmado += parseFloat(prod.precio);
        } else {
            li.innerHTML = `<strong>${pasosArmado[i].toUpperCase()}:</strong> SIN SELECCIONAR`;
            
        }
        ul.appendChild(li);

    });

    //actualizar la lista de perifericos en caso de que haya alguno
    if (perifericosSeleccionados.length > 0) {
        var liPeriferico = document.createElement("li");
        liPeriferico.innerHTML = `<strong>Lista de PERIFÉRICOS:</strong>`;

        //se crea una sublista de perifericos:
        const ulPerifericos = document.createElement("ul");
        perifericosSeleccionados.forEach(p => {
            const li = document.createElement("li");
            li.textContent = `${p.nombre} - $${parseFloat(p.precio).toLocaleString("es-AR")}`;
            ulPerifericos.appendChild(li);
            totalArmado += parseFloat(p.precio);
        });

        liPeriferico.appendChild(ulPerifericos);
        ul.appendChild(liPeriferico);
    }

    total.innerHTML = `${totalArmado.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
}

function agregarAlCarritoArmado() {
    for (let comp of componentesSeleccionados) {
        //verifica que el componente no sea 0 (el que el usuario no elije, por ejemplo la placa de video)
        if (comp!==0){
            agregarAlCarrito(comp);
        }
        
    }
    for (let p of perifericosSeleccionados) {
        agregarAlCarrito(p);
    }
    componentesSeleccionados=[];
    perifericosSeleccionados=[];
    iniciarArmado();
    mostrarNotificacionCarrito("Se agregaron todos los componentes al carrito");
    

}

function volverUnPaso() {
    //se elimina el ultimo elemento del arreglo, se actualiza el resumen y se vuelve atras un paso. 
    if (componentesSeleccionados.length > 0) {
        componentesSeleccionados.pop();
        actualizarResumen();
        mostrarPaso(componentesSeleccionados.length);
    }

}

function alternarPeriferico(idProducto) {
    const producto = productosGuardados.find(p => p.id === idProducto);
    const index = perifericosSeleccionados.findIndex(p => p.id === idProducto);

    if (index !== -1) {
        perifericosSeleccionados.splice(index, 1);
    } else {
        perifericosSeleccionados.push(producto);
    }

    mostrarPaso(componentesSeleccionados.length); // volver a renderizar la tabla
    actualizarResumen(); // actualizar listado y total
}

/*********************************************
 *                                           *
 *         QUE COMPUTADORA QUIERO            *
 *     En esta parte va todo lo relacionado  *
 *      al formulario de la computadora      *
 *                                           *
 *********************************************/

function sugerirComputadora() {
    const tipoPC = document.getElementById("tipo-pc");
    const almacenamiento = document.getElementById("cant-almacenamiento");
    const checks = document.querySelectorAll('#form-servicio input[type="checkbox"]:checked');
    const errorCheck = document.getElementById("error-check");
    var valido = true;

    //limpiar errores previos
    limpiar(tipoPC);
    limpiar(almacenamiento);
    errorCheck.style.display = "none";

    // Validación
    if (tipoPC.value === "") {
        error(tipoPC);
        valido = false
    }
    if (almacenamiento.value === "") {
        error(almacenamiento);
        valido = false
    }
    if (checks.length === 0) {
        errorCheck.style.display = "block";
        errorCheck.innerHTML = "Elegir al menos una opción";
        valido = false;
    }

    if (valido) {
        // Requerimiento total
        let requerimiento = 0;
        checks.forEach(check => {
            switch (check.value) {
                case "navegar":
                case "estudio":
                    requerimiento += 1;
                    break;
                case "oficina":
                case "programacion":
                    requerimiento += 2;
                    break;
                case "diseño":
                case "juegosPR":
                    requerimiento += 3;
                    break;
                case "video":
                case "juegosAR":
                case "profesional":
                    requerimiento += 10;
                    break;
            }
        });


        // Filtro por tipo
        let tipoSeleccionado = [];
        if (tipoPC.value === "pc-armada") tipoSeleccionado = ["pc-armada"];
        else if (tipoPC.value === "notebook") tipoSeleccionado = ["notebook"];
        else tipoSeleccionado = ["pc-armada", "notebook"];

        let prodRequeridos = productos.filter(p =>
            //filtra los productos segun el tipo seleccionado
            tipoSeleccionado.includes(p.categoria) &&
            //filtra los menores al requerimiento pedido por el usuario
            parseInt(p.requerimiento) >= requerimiento
        );

        //filtrar segun almacenamiento
        let prodRecomendados;
        if (almacenamiento.value === "menos512") {
            prodRecomendados = prodRequeridos.filter(p =>
                parseInt(p.almacenamiento) <= 512
            );
        } else {
            prodRecomendados = prodRequeridos.filter(p =>
                parseInt(p.almacenamiento) > 512)
        }

        prodRecomendados.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
        mostrarResultados(prodRecomendados);
    }

}

function mostrarResultados(productos) {
    let contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.innerHTML = "";
    if (productos.length === 0) {
        contenedorTarjetas.innerHTML = "<p>No se encontraron computadoras que cumplan con tus criterios.</p>";
        return;
    }
    mostrarProductos(productos, "contenedor-tarjetas");
    
}


/*
Cosas que faltan:
-agregar conversor a dolar 
-Agregar imagenes
*/

