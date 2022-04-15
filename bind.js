const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
        return `a personagem é ${this.nome}`
    }
}

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

//utilizamos o método bind() para “ligar” a função que atribuímos a personagemGenerico ao objeto personagem

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia