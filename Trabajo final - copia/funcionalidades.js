// Leer productos desde localStorage
const productosGuardados = JSON.parse(localStorage.getItem('productos'));

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
    // Verificamos que existan
    if (productosGuardados && productosGuardados.length > 0) {

        var contenedorProductos = document.getElementById(id);
        if (contenedorProductos != null) {
            productosGuardados.forEach(producto => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'tarjeta';
                tarjeta.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="tarjeta-contenido">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p class="precio">$${producto.precio}</p>
                        <button class="boton-carrito">Añadir al carrito</button>
                    </div>
                    `;

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