const cliente = {
    nome: "Vitor",
    idade: 19,
    cpf: "70889039092",
    email: "vitor@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]); //Imprime apenas o valor da chave nome do objeto

chaves.forEach(info => console.log(cliente[info])); //Imprime o valor de todas as chaves do objeto

console.log(cliente["conta"]); //O JS retorna undefined quando é passada uma chave que não existe no objeto