const carrito = []
const carritoEfectivo = []

class primeraInfancia {
    constructor(articulo, precio){
        this.articulo = articulo.toUpperCase();
        this.precio = parseFloat(precio)
    }

    descEfect () {
        this.precio = this.precio/1.10;
    }
}

let camionDidactico = prompt("Deseas comprar éste Camión Didáctico (SI - NO) ¡Está en Promo!")

if (camionDidactico == "SI" || camionDidactico == "Si" || camionDidactico == "si" || camionDidactico == "sI") {
    carrito.push(new primeraInfancia("camion didactico promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("camion didactico", "3200"));
}

let cuboDidactico = prompt("Deseas comprar éste Cubo Didáctico (SI - NO)")

if (cuboDidactico == "SI" || cuboDidactico == "Si" || cuboDidactico == "si" || cuboDidactico == "sI") {
    carrito.push(new primeraInfancia("Cubo Didactico", "2800"));
    carritoEfectivo.push(new primeraInfancia("Cubo Didactico", "2800"));
}

let muñecoApego = prompt("Deseas comprar éste Muñeco de Apego (SI - NO)¡Está en Promo!")

if (muñecoApego == "SI" || muñecoApego == "Si" || muñecoApego == "si" || muñecoApego == "SI") {
    carrito.push(new primeraInfancia("Muñeco de Apego promo", "3000"));
    carritoEfectivo.push(new primeraInfancia("Muñeco de Apego", "3000"));
}

let pelotero = prompt("Deseas comprar éste Pelotero (SI - NO)")

if (pelotero == "SI" || pelotero == "Si" || pelotero == "si" || pelotero == "sI" ) {
    carrito.push(new primeraInfancia("Pelotero", "3300"));
    carritoEfectivo.push(new primeraInfancia("Pelotero", "3300"));
}

let libroSensorial = prompt("Deseas comprar éste Libro Sensorial (SI - NO)")

if (libroSensorial == "SI" || libroSensorial == "Si" || libroSensorial == "si" || libroSensorial == "sI" ) {
    carrito.push(new primeraInfancia("Libro Sensorial", "1800"));
    carritoEfectivo.push(new primeraInfancia("Libro Sensorial", "1800"));
}

let xilofon = prompt("Deseas comprar éste Xilofón (SI - NO) ¡Está en Promo!")

if (xilofon == "SI" || xilofon == "Si" || xilofon == "si" || xilofon == "sI") {
    carrito.push(new primeraInfancia("Xilfon Promo", "3200"));
    carritoEfectivo.push(new primeraInfancia("Xilfon", "3200"));
}

for(const primeraInfancia of carritoEfectivo) {
    primeraInfancia.descEfect();}

const totalCompra = carrito.reduce((acc, el) => acc + el.precio, 0)
const totalcompraEfect = carritoEfectivo.reduce((acc, el) => acc + el.precio, 0)

const promo = carrito.filter((el)=> el.articulo.includes("PROMO"))

console.log(carrito)
console.log(totalCompra)
console.log(carritoEfectivo)
console.log(totalcompraEfect)
console.log(promo)

alert("El total de tu carrito pagando en la web es : " + totalCompra)
alert("El total de tu carrito pagando en efectivo en nuestra tienda es : " + totalcompraEfect)