const cliente = {
    nome: "Vitor",
    idade: 19,
    cpf: "70889039092",
    email: "vitor@gmail.com"
}

console.log(cliente);

cliente.fone = "85999340490"; //Se a chave ainda não existe é criada uma nova chave e atribuido o valor

console.log(cliente);

cliente.fone = "8892032435"; //Caso a chave já exista, o valor dela é atualizado

console.log(cliente);