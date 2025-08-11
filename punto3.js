//Punto 3
String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
}
const saludo = "Hola";
const resultado = saludo.concatenarPalabra("Mundo");
console.log(resultado); 
console.log(saludo);