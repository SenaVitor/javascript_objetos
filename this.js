const pessoa1 = {
    nome: "Ana",
    email: "a@email.com",
    imprimeInfo: function(){
        console.log(`nome: ${this.nome}, email ${this.email}`)
    }
}
   
const pessoa2 = {
    nome: "Paula",
    email: "p@email.com",
    imprimeInfo: function(){
        console.log(`nome: ${this.nome}, email ${this.email}`)
    }
}
   
pessoa1.imprimeInfo()
//nome: Ana, email a@email.com
pessoa2.imprimeInfo()
//nome: Paula, email p@email.com

function Pessoa(nome, email){
    this.nome =nome
    this.email =email
    this.imprimeNomeEmail = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Pessoa("Vitor", "v@email.com")
const pessoa4 = new Pessoa("Wilker", "w@email.com")

pessoa3.imprimeNomeEmail()
// nome: Vitor, email: v@email.com
pessoa4.imprimeNomeEmail()
// nome: Wilker, email: w@email.com