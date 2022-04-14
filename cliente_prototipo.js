function Cliente(nome, cpf, idade, saldo){
    this.nome = nome
    this.cpf = cpf
    this.idade = idade
    this.saldo = saldo
    this.depositar = function (valor){
        this.saldo += valor
    }
}
const c1 = new Cliente("Vitor", "08998767543", 19, 100)

function ClientePoupanca(nome, cpf, idade, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, idade, saldo)
    this.saldoPoup = saldoPoup
}

const c2 = new ClientePoupanca("Leandro", "29097345674", 19, 200, 1000)
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
console.log(c1.hasOwnProperty("saldoPoup"))
console.log(c2.hasOwnProperty("saldoPoup"))
console.log(c1 instanceof Cliente)
console.log(typeof c1)
console.log(typeof c2)
console.log(c2 instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)