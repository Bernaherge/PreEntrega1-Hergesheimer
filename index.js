let edad = parseInt(prompt("ingrese su edad"))

if(edad < 18){
    alert("No puedes continuar en el sitio, llama a un mayor de edad");
}else if(edad >= 18){
    alert("Bienvenido al sitio");
}else{
    alert("Debes informar tu edad para continuar");
}

let nombre = prompt("Ingrese su nombre");
let mensaje = `Hola ${nombre}, elegí que productos queres cargar al carrito`;
alert(mensaje);

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

producto1.vender();
console.log(producto1);







//Para agregar un ciclo con funcion for podria poner turnos para buscar la ropa si desea pasar a buscarla 
