// Leer productos desde localStorage
const productosGuardados = JSON.parse(localStorage.getItem('productos'));

// Leer carrito de compras desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito'));

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

    carrito.forEach((producto, index) => {
        const fila = tabla.insertRow();

        // Imagen
        const celdaImagen = fila.insertCell();
        celdaImagen.innerHTML = `<img src="${producto.imagen}" alt="${producto.nombre}">`;

        // Nombre
        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = producto.nombre;

        // Precio
        const celdaPrecio = fila.insertCell();
        const precio = parseFloat(producto.precio);
        celdaPrecio.textContent = "$" + precio.toLocaleString("es-AR", { minimumFractionDigits: 2 });

        // Cantidad como input number
        const celdaCantidad = fila.insertCell();
        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.min = "1";
        inputCantidad.value = producto.cantidad;

        inputCantidad.addEventListener("change", function () {
            actualizarCantidad(index, parseInt(inputCantidad.value));
        });

        celdaCantidad.appendChild(inputCantidad);

        // Botón Eliminar
        const celdaAccion = fila.insertCell();
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "boton-eliminar";
        botonEliminar.onclick = function () {
            eliminarDelCarrito(index);
        };
        celdaAccion.appendChild(botonEliminar);
    });
    calcularTotal()
}


function eliminarDelCarrito(index) {

    carrito.splice(index, 1); // Eliminar el producto por índice
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function actualizarCantidad(index, nuevaCantidad) {

    if (nuevaCantidad < 1) nuevaCantidad = 1;
    carrito[index].cantidad = nuevaCantidad;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    calcularTotal();
}

function calcularTotal() {

    let total = 0;

    carrito.forEach(producto => {
        const precio = parseFloat(producto.precio);
        const cantidad = producto.cantidad || 1;
        total += precio * cantidad;
    });

    const totalDiv = document.getElementById("totalCarrito");
    totalDiv.textContent = `Total: $${total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}`;
}

function mostrarCampoCodigoPostal() {
    const metodo = document.getElementById("metodo-envio").value;
    const contenedor = document.getElementById("datos-envio");

    if (metodo === "envio") {
        contenedor.style.display = "block";
    } else {
        contenedor.style.display = "none";
    }
}