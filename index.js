function saludar(){
    alert("Bienvenido a compras online")
}
saludar();
let edad = parseInt(prompt("ingrese su edad"))

if(edad < 18){
    alert("No puedes continuar en el sitio, llama a un mayor de edad");
}else if(edad >= 18){
    alert("Bienvenido al sitio");
}else{
    alert("Debes informar tu edad para continuar");
}

let nombre = prompt("Ingrese su nombre");
let mensaje1 = `Hola ${nombre}, tenemos remeras, pantalones, buzos y medias, que estabas buscando?`;
alert(mensaje1);

const indumentaria = [
           {producto: 'remera', marca: 'Nike', caracteristicas: 'azul, manga corta, talle M', precio: 6500},
           {producto: 'remera', marca: 'Adidas', caracteristicas: 'negra, manga larga, talle S', precio: 10500},
           {producto: 'pantalon', marca: 'Nike', caracteristicas: 'azul, talle L', precio: 18500},
           {producto: 'pantalon', marca: 'Adidas', caracteristicas: 'gris, talle M', precio: 16500},
           {producto: 'buzo', marca: 'Nike', caracteristicas: 'verde, talle L', precio: 14500},
           {producto: 'buzo', marca: 'Under Armour', caracteristicas: 'azul, talle S', precio: 17000},
           {producto: 'medias', marca: 'Nike', caracteristicas: 'azul, talle 43', precio: 3500},
           {producto: 'medias', marca: 'Adidas', caracteristicas: 'blanco, talle 41', precio: 2500},
]
let mensaje2 = "Estas son las opciones en el rango de precios ingresado: \n";
let resultado = [];
let limite_precio;
let producto;
comenzar();

function comenzar(){
    producto = prompt("Seleccione un tipo de producto entre remera, pantalon, buzo o medias");
    evaluar_producto(producto);
}
function evaluar_producto(producto){
    switch(producto.toLowerCase()){
        case "remera":
        case "pantalon":
        case "buzo":
        case "medias":
            limite_precio = prompt("Seleccione el limite de precio que desea gastar");
            evaluar_precio(limite_precio);
            
            for (let i = 0; i < indumentaria.length; i++) {
                if (indumentaria[i].producto == producto.toLowerCase() && indumentaria[i].precio <= parseInt(limite_precio)) {
            mensaje2 += indumentaria[i].producto + ": $" + indumentaria[i].precio + "\n"; resultado.push(indumentaria[i])    
                }
            }
            if(resultado.length){
                alert(mensaje1);
            }else{
                alert("No tenemos productos en este momento para el monto ingresado, por favor vuelva a comenzar"); comenzar();
            }
        break;
        default:
            let nuevo_producto = prompt("Error - Por favor seleccione algun tipo de indumentaria");
            evaluar_producto(nuevo_producto);
            break;    
    }
}
function evaluar_precio(precio){
    let nuevo_precio;
    if(isNaN(precio)){
        nuevo_precio = prompt("Error, seleccione un valor númerico");
        evaluar_precio(nuevo_precio);
        return;
    }
}



//
/*
class Producto{
    constructor(nombre, talle, precio, cantidad){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    vender(){
        this.cantidad -= 1;   
            }
    if (cantidad = 0){
     alert("Producto agotado")
            } 
     }

const producto1 = new Producto ("Remera Nike azul manga corta", "M", 8050, 3);
const producto2 = new Producto ("Remera Adidas negra manga larga", "S", 10050, 5);
const producto3 = new Producto ("antalon Nike gris con bolsillos", "M", 16050 , 10);
const producto4 = new Producto ("Pantalon Adidas rojo sin bolsillos", "L", 18050, 4);
const producto5 = new Producto ("Medias Nike blancas cortas", "M", 2050, 7);
const producto6 = new Producto ("Musculosa Under Armour amarilla", "S", 9050, 6);
const producto7 = new Producto ("Buzo Ascis verde poliester", "L", 12000, 8);


alert(producto1);

*/





//Para agregar un ciclo con funcion for podria poner turnos para buscar la ropa si desea pasar a buscarla 
