class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const c1 = new Cliente("Vitor", "vitor@email.com", "13425390887", 100)

c1.exibirSaldo()
console.log(c1)
