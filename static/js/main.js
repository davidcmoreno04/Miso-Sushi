// CATALOG DE PRODUCTOS TIENDA TECNOLOGIA EN FORMATO JSON
const productos=[
// SECCION DE CELULARES 
{
    id:"1",
    titulo:"Sushi de Salmon",
    imagen:"https://i.pinimg.com/1200x/6e/69/b3/6e69b3ab4b8d9c7264afd3825879f499.jpg",
    categoria:{
        nombre:"Sushi",
    id:"sushi" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:15000


},

{
    id:"2",
    titulo:"Sushi Maki x 20 Unidades",
    imagen:"https://i.pinimg.com/1200x/0a/1b/46/0a1b46081cac4df3fcc4fd364d1173dd.jpg",
    categoria:{
        nombre:"Sushi",
    id:"sushi" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:25000

},

{
    id:"3",
    titulo:"Sushi en Tempura x 25 Unidades",
    imagen:"https://i.pinimg.com/1200x/24/be/1d/24be1d4db32e73415b442a039b08523a.jpg",
    categoria:{
        nombre:"Sushi",
    id:"sushi" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:35000

},

{
    id:"4",
    titulo:"Tabla de Sushi Personalizado",
    imagen:"https://i.pinimg.com/1200x/30/f7/eb/30f7ebe24f6bb9a313c475e9ef8576c9.jpg",
    categoria:{
        nombre:"Sushi",
    id:"sushi" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:50000

},
// Bebidas
{
    id:"5",
    titulo:"Coctel de Naranja",
    imagen:"https://i.pinimg.com/736x/0c/47/0a/0c470abad960976b83cf00a3102aa37f.jpg",
    categoria:{
        nombre:"Bebidas",
    id:"bebidas" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:8000

},

{
    id:"6",
    titulo:"Bebidas sin Alcohol",
    imagen:"https://i.pinimg.com/736x/e8/ea/30/e8ea306cf14ed21d61c88fddfe385ded.jpg",
    categoria:{
        nombre:"Bebidas",
    id:"bebidas" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:6000

},

{
    id:"7",
    titulo:"Coctel de Panelada",
    imagen:"https://i.pinimg.com/736x/41/a0/2c/41a02c45340b89e218630f6fd0febc9d.jpg",
    categoria:{
        nombre:"Bebidas",
    id:"bebidas" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:9000

},

{
    id:"8",
    titulo:"Bebidas en Leche",
    imagen:"https://i.pinimg.com/736x/9d/fc/d8/9dfcd8d6ddae6b6e545489efd2d5359f.jpg",
    categoria:{
        nombre:"Bebidas",
    id:"bebidas" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:12000

},
// Ramen
{
    id:"9",
    titulo:"Ramen con Camaron",
    imagen:"https://i.pinimg.com/736x/93/3e/cd/933ecd8a4f8e127fce7d780c9a6d4632.jpg",
    categoria:{
        nombre:"Ramen",
    id:"ramen" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:40000

},

{
    id:"10",
    titulo:"Ramen con Cerdo",
    imagen:"https://i.pinimg.com/736x/27/14/af/2714af0f8f2abfd2192b7b6a3b1d6ccb.jpg",
    categoria:{
        nombre:"Ramen",
    id:"ramen" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:35000

},

{
    id:"11",
    titulo:"Ramne Picante",
    imagen:"https://i.pinimg.com/736x/3e/87/bc/3e87bc5bfb175ee9f8b3d0cd683ede61.jpg",
    categoria:{
        nombre:"Ramen",
    id:"ramen" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:30000

},

{
    id:"12",
    titulo:"Ramen con Champiñones",
    imagen:"https://i.pinimg.com/736x/ae/ad/7d/aead7d3aeb8e27b8f352beaf7dc82adb.jpg",
    categoria:{
        nombre:"Ramen",
    id:"ramen" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:178900

}, // En el ultimo producto se le quita la coma

{
    id:"13",
    titulo:"Mochis de Fresa x 4 Unidades",
    imagen:"https://i.pinimg.com/1200x/05/07/d6/0507d69e37dad1638c33aa746512e97f.jpg",
    categoria:{
        nombre:"Postres",
    id:"postres" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:20000

},

{
    id:"14",
    titulo:"Pancake Relleno",
    imagen:"https://i.pinimg.com/736x/cb/7f/da/cb7fdabf5c238f7ca02899cad9b6a28f.jpg",
    categoria:{
        nombre:"Postres",
    id:"postres" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:24000

},

{
    id:"15",
    titulo:"Taiyaki con Crema o Helado",
    imagen:"https://i.pinimg.com/736x/9e/14/71/9e1471f41324fd6003608f394ed40771.jpg",
    categoria:{
        nombre:"Postres",
    id:"postres" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:23000

},

{
    id:"16",
    titulo:"Sushi Dulce",
    imagen:"https://i.pinimg.com/736x/7e/ac/ea/7eacea8d0e188ace98cfafd910c16c41.jpg",
    categoria:{
        nombre:"Postres",
    id:"postres" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:28000

} // En el ultimo producto se le quita la coma

];
//SECCION DE CODIGO JS 
//código Js
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
