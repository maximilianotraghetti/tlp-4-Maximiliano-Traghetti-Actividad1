
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