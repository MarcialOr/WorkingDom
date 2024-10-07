// Productos simulados
const productos = [
    {
        nombre: 'Mercedez Benz',
        descripcion: 'Este es un excelente producto.',
        precio: '50.00',
        imagen: './src/img/products/mercedez.jpg',
    },
    {
        nombre: 'Mclaren',
        descripcion: 'Calidad garantizada en este producto.',
        precio: '49.00',
        imagen: './src/img/products/Mclaren.jpg',
    },
    {
        nombre: 'Ferrari',
        descripcion: 'La mejor opción para ti.',
        precio: '56.00',
        imagen: './src/img/products/Ferrari.jpg',
    }
];


// Selección del contenedor donde se agregarán las cards
const productList = document.getElementById('product-list');

// Función para crear una card de producto
function crearCardProducto(producto) {
    // Crear el contenedor de la card
    const card = document.createElement('div');
    card.classList.add('col'); // Añade a la columna de Bootstrap

    // Estructura de la card
    card.innerHTML = `
        <div class="card h-100">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text"><strong>Precio: $${producto.precio}</strong></p>
                <button class="btn btn-primary">Añadir al carrito</button>
            </div>
        </div>
    `;

    // Agregar la card al contenedor de productos
    productList.appendChild(card);
}

// Crear todas las cards de productos
productos.forEach(producto => {
    crearCardProducto(producto);
});

// Manejar la creación de nuevos productos desde el formulario
const productForm = document.getElementById('productForm');
productForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('productName').value;
    const descripcion = document.getElementById('productDescription').value;
    const precio = document.getElementById('productPrice').value;
    const imagen = document.getElementById('productImage').value;

    // Crear un nuevo objeto de producto
    const nuevoProducto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
    };

    // Crear la card para el nuevo producto
    crearCardProducto(nuevoProducto);

    // Limpiar el formulario y cerrar el modal
    productForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();
});

const changeColorBtn = document.getElementById('change-color-btn');

// Acción 2: Cambiar el color de fondo de la página
changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
    console.log('El color de fondo ha sido cambiado');
});

// Función para generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}