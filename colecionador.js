const colecionador = {
    nome: "João do Gibi",
    idade:23,
    tipocolecao: ["Quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}

console.log(`Nome: ${colecionador.nome}`) //Utilizando a notação de ponto
console.log(`Idade: ${colecionador["idade"]}`) //Utilizando a notação de colchetes

//Adicionando 4 novos valores no campo tipocolecao
for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i) 
}

console.log(`Tipo de coleção: ${colecionador.tipocolecao}`)