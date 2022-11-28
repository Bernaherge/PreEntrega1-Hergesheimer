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
    constructor(nombre, talle, precio){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.vendido = false;
    }
    vender(){
        this.vendido = true;
    }
}

const producto1 = new Producto ("Remera Nike azul manga corta", "M", 8050);
const producto2 = new Producto ("Remera Adidas negra manga larga", "S", 10050);
const producto3 = new Producto ("antalon Nike gris con bolsillos", "M", 16050);
const producto4 = new Producto ("Pantalon Adidas rojo sin bolsillos", "L", 18050);
const producto5 = new Producto ("Medias Nike blancas cortas", "M", 2050);
const producto6 = new Producto ("Musculosa Under Armour amarilla", "S", 9050);
const producto7 = new Producto ("Buzo Ascis verde poliester", "L", 12000);







//Para agregar un ciclo con funcion for podria poner turnos para buscar la ropa si desea pasar a buscarla 
