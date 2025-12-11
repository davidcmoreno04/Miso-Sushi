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
    titulo:"Macbook Air 15 - Azul Cielo",
    imagen:"https://i.pinimg.com/1200x/63/ff/ec/63ffecad564ef57f80a7ffc23108ef1d.jpg",
    categoria:{
        nombre:"Computadores",
    id:"computadores" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:9199010

},

{
    id:"6",
    titulo:"MacBook Air 13 - Azul Medianoche",
    imagen:"https://www.alkosto.com/medias/195950772258-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTgyNHxpbWFnZS93ZWJwfGFETXlMMmcxT1M4eE5UUXhNRGcxTnprMk56WTBOaTh4T1RVNU5UQTNOekl5TlRoZk1EQXhYemMxTUZkNE56VXdTQXxiYmRjMTNlYmZhNmYwYWRhZjA1NmUxOWMzYjZmMGYzNDdlZGUxMzhkNjg2ODI3MzIwNGFhOGZiZWVlOWY5YTQ1",
    categoria:{
        nombre:"Computadores",
    id:"computadores" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:6949010

},

{
    id:"7",
    titulo:"Computador All In One LENOVO IdeaCentre AIO 3 - 23.8 - Blanco",
    imagen:"https://www.alkosto.com/medias/198154749583-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNTMxMHxpbWFnZS93ZWJwfGFEaGhMMmcwWmk4eE5UTXlPRFUwTnpBeE1qWXpPQzh4T1RneE5UUTNORGsxT0ROZk1EQXhYemMxTUZkNE56VXdTQXwzZjBiMzIzMjRmODJjNTViM2JjNTYzOTUyMDA5MmRjYjY0OTVhZTNmNmQwZGFkOTU5NjhmMTdiMzcxNTczMDVm",
    categoria:{
        nombre:"Computadores",
    id:"computadores" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:3599000

},

{
    id:"8",
    titulo:"Computador Portátil 2 en 1 HP Omnibook 14 - Rosado",
    imagen:"https://www.alkosto.com/medias/199251256882-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNDM0MHxpbWFnZS93ZWJwfGFESTBMMmhoTkM4eE5USXhNVGc0T1RZNE9EWXdOaTh4T1RreU5URXlOVFk0T0RKZk1EQXhYemMxTUZkNE56VXdTQXxkZWM2NjEwNTA4NGJkMmQwMjU3OTVjOTJmMzI2M2YyNzFiMDE1ZTk5YWZkNzRmMTgyMTIyYTQyYmE5M2RmZTEw",
    categoria:{
        nombre:"Computadores",
    id:"computadores" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:5499000

},
// ACCESORIOS
{
    id:"9",
    titulo:"Combo KALLEY Inalámbrico Teclado + Mouse K-CIM Morado Mate",
    imagen:"https://www.alkosto.com/medias/7705946475020-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTk4NHxpbWFnZS93ZWJwfGFHWXlMMmd4TWk4eE5URTRORE0wTkRjME16azJOaTgzTnpBMU9UUTJORGMxTURJd1h6QXdNVjgzTlRCWGVEYzFNRWd8MmUyMGVmNTNhMmY5MTI4YjU4OTJmNGE5Y2ZlM2M3ZDJiMTBkZmFjNjc1YjUyZWY2Nzk2MDA0MTlmMmNhNzJiOQ",
    categoria:{
        nombre:"Accesorios",
    id:"accesorios" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:99900

},

{
    id:"10",
    titulo:"Audífonos de Diadema LOGITECH G Inalámbricos Gamer G435 Blanco",
    imagen:"https://www.alkosto.com/medias/097855168252-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MjQyNHxpbWFnZS93ZWJwfGFHRm1MMmc0TUM4eE5ETXhPREU0TVRZeE16VTVPQzh3T1RjNE5UVXhOamd5TlRKZk1EQXhYemMxTUZkNE56VXdTQXw3OTIxN2VlZWZiMmE5YTAwZmMxY2VjNDExZGVjMTRlYmE4ODZmM2I4NzNkYjJiYjYzMmE3ZjY5MTFiN2I0NjE3",
    categoria:{
        nombre:"Accesorios",
    id:"accesorios" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:359900

},

{
    id:"11",
    titulo:"Kit x 2 Micrófono PRIMUS Inalámbrico USB-C Negro",
    imagen:"https://www.alkosto.com/medias/798302225299-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxODQ5NHxpbWFnZS93ZWJwfGFHSTJMMmcwTWk4eE5URTNPVEF6T1RrMk5USXhOQzgzT1Rnek1ESXlNalV5T1RsZk1EQXhYemMxTUZkNE56VXdTQXxjMzAzZWM1ZDE5ZjgwZmUyNjIyMjRhYzgxMzI2M2I2NzhiNDQ0ZTBjZTZhZTUyMDcwNGM4ZjU5NDc4Y2E4Yjc5",
    categoria:{
        nombre:"Accesorios",
    id:"accesorios" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:149900

},

{
    id:"12",
    titulo:"Micrófono TRUST Alámbrico Gaming USB GXT 234 Yunix Negro",
    imagen:"https://www.alkosto.com/medias/8713439253726-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzI3MnxpbWFnZS93ZWJwfGFESTNMMmc0Tmk4eE5USTNOamc1TmpneE16QTROaTg0TnpFek5ETTVNalV6TnpJMlh6QXdNVjgzTlRCWGVEYzFNRWd8ZWNiNzIxZjVkMzlmMzBkNjhjMjY4YzA4MTFjZTlhYmY4MGQ2NDAyY2U0ZWQ4MWM4OWJiOTA3YWY1NjEyNDEyYw",
    categoria:{
        nombre:"Accesorios",
    id:"accesorios" // palabra calve debe ser igual al button id en index_car.html    
    },
    precio:178900

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
