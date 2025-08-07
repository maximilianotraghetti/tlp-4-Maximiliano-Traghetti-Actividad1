//Punto 1

function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}

CuentaBancaria.prototype.depositar = function(cantidad) {
    this.saldoInicial += cantidad;
    console.log(`Depósito: ${cantidad}. Nuevo saldo: ${this.saldoInicial}`);
}
CuentaBancaria.prototype.extraer = function(cantidad) {
    if (cantidad > this.saldoInicial) {
        console.log("Fondos insuficientes");
        
    }
    else {
        this.saldoInicial -= cantidad;
        console.log(`Extracción: ${cantidad}. Nuevo saldo: ${this.saldoInicial}`);
    }
}
CuentaBancaria.prototype.consultarSaldo = function() {
    console.log(`Saldo actual: ${this.saldoInicial}`);
}

//Pruebas
const Maxi = new CuentaBancaria("Maxi", 300)
Maxi.depositar(1000);
Maxi.extraer(1200);
Maxi.extraer(500);
Maxi.consultarSaldo();

//Punto 2
class CuentaBancaria2 {
  constructor(titular, saldoInicial) {
    this.titular = titular;
    this._saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(nuevoSaldo) {
    if (nuevoSaldo < 0) {
      console.log("No se puede asignar un saldo negativo.");
    } else {
      this._saldo = nuevoSaldo;
    }
  }
}

const cuenta = new CuentaBancaria2("Maxi", 500);
console.log(cuenta.saldo);

cuenta.saldo = 1000;
console.log(cuenta.saldo);

cuenta.saldo = -100;      
console.log(cuenta.saldo);

//Punto 3

String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
}
const saludo = "Hola";
const resultado = saludo.concatenarPalabra("Mundo");
console.log(resultado); 
console.log(saludo);

//punto 4
String.prototype.toUpperCase = function() {
    return "ESTO ESTA PROHIBIDO"
}
console.log("hola".toUpperCase()); 
console.log("OTRA FRASE".toUpperCase());

