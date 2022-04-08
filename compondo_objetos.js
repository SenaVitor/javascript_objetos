const cliente = {
    nome: "Mayk",
    idade: 21,
    cpf: 70889039092,
    email: "mayk@gmail.com",
    fones: ["85989923453", "88978980234"]
}

cliente.dependentes = {
    nome: "Yan",
    parentesco: "filho",
    dataNasc : "22/02/2022"
}

console.log(cliente)

cliente.dependentes.nome = "Yan Lucas"

console.log(cliente)