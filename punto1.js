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
