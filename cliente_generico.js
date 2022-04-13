function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.depositar = function(valor){
        this.saldo += valor
    }
}
const c1 = new Cliente("Vitor", "08997842598", "vitor@gmail.com", 100)
console.log(c1)