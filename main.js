const Producto = function( nombre,precio,stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}
let producto1= new Producto("Harina",1300,30)
let producto2= new Producto("Arroz",800,30)
let producto3= new Producto("Fideos moñitos",2000,30)
let producto4= new Producto("Fuyi",2400,20)
let producto5= new Producto("Sedal (shampoo)",1600,25)
let producto6= new Producto("Sedal (acondicionador)",1600,25)

const lista = [producto1,producto2,producto3,producto4,producto5,producto6]

//filtrar los productos para poder modificarlos

function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave)  )

    if(resultado.length >0){ // si es mayor a 0, significa que al menos un resultado encontro
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}

function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto").trim();
    let precio = parseFloat(prompt("ingresa el precio del producto"));
    let stock = parseInt(prompt("ingresa el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){
    alert("por favor ingrese datos validos")
    return;
    }

    let producto = new Producto(nombre,precio,stock)
    lista.push(producto)
    console.table(lista)
}