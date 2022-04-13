function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const c1 = new Cliente("Vitor", "08997842598", "vitor@gmail.com", 100)

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const c2 = new ClientePoupanca("Alice", "89772454212", "alice@gmail.com", 100, 200)

console.log(c2)
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

c2.depositarPoup(90)
console.log(c2.saldoPoup)
console.log(c1.saldoPoup)