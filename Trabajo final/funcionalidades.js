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
                boton.addEventListener('click', () => {
                    agregarAlCarrito(producto);
                });

                contenedorProductos.appendChild(tarjeta);
            });
        }
    } else {
        console.warn('No se encontraron productos en localStorage.');
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
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificamos si ya está en el carrito
    const existe = carrito.find(p => p.id === producto.id);
    if (existe) {
        existe.cantidad += 1; // Aumentamos la cantidad
    } else {
        producto.cantidad = 1; // Nueva propiedad cantidad
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`"${producto.nombre}" se añadió al carrito.`);
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
        celdaNombre.innerHTML= producto.nombre;

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

        inputCantidad.addEventListener("change", function () {
            actualizarCantidad(i, parseInt(inputCantidad.value));
        });

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

    carrito.splice(i, 1); // Eliminar el producto por índice
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function actualizarCantidad(i, nuevaCantidad) {
    //la cantidad nunca es 0
    if (nuevaCantidad < 1) nuevaCantidad = 1;
    carrito[i].cantidad = nuevaCantidad;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();
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
    document.getElementById("costo-envio").innerHTML= `$${costoEnvio.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
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
    costoEnvio=0;
    calcularTotal();
    document.getElementById("resultado-envio").innerHTML="";
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


function calculoDeEnvio(codigoPostal){
    var codigos = ["1000","1704","7600","5000","4000","5500","2000","3400","3500","8300","8328"];
    var montos = [1500, 2000, 2500, 3000, 3500, 4000, 5000, 3800, 1234, 6500, 0];
    var valor = -1;
    for (let i = 0; i < codigos.length; i++) {
        if(codigoPostal === codigos[i]){
            return montos[i];
        }
    }
    return valor;
}

function verificarCodigoPromocional() {
    var codigos = ["desc50","desc75","desc10"];
    var descuentos = [0.5,0.75,0.10];
    const resultado = document.getElementById("resultado-codigo")
    const codigo = document.getElementById("codigo-promocional").value.trim().toLowerCase();
    encontroDescuento=false;
    
     for (let i = 0; i < codigos.length; i++) {
        if(codigo === codigos[i]){
            descuento = descuentos[i]
            encontroDescuento=true;
            resultado.innerHTML= "<span style='color:green'>¡Descuento del " + (descuentos[i]*100) + "% aplicado!</span>" 
        }
    }

    if (!encontroDescuento) {
        descuento = 0;
        resultado.innerHTML= "<span style='color:red; font-weight:bold;'>¡Ingrese un código válido!</span>"; 
    }

    calcularTotal();
}

function verificarAntesDeAbonar() {
    
    const metodo = document.getElementById("metodo-envio");
    const codigoPostal = document.getElementById("codigo-postal");
    limpiar(metodo);
    limpiar(codigoPostal);

    if (metodo.value === "default") {
        error(metodo);
        return;
    }

    if (metodo.value === "envio" && codigoPostal.value === "") {
        error(codigoPostal)
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

/*


tbody?
falta la notificacion de que hay un item en el carrito de compras

*/ 