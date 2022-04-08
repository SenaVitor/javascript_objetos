const cliente = {
    nome: "Mayk",
    idade: 21,
    cpf: 70889039092,
    email: "mayk@gmail.com",
    fones: ["85989923453", "88978980234"],
    dependentes: [{
        nome: "Yan",
        parentesco: "filho",
        dataNasc : "22/02/2022"
    }]
}

cliente.dependentes.push({
    nome: "Ana",
    parentesco: "filha",
    dataNasc: "04/07/2020"
})

const filhoMaisNovo = cliente.dependentes.filter(dependente => dependente.dataNasc === "22/02/2022")
console.log(filhoMaisNovo) //retorna todo o array
console.log(filhoMaisNovo[0].nome) //retorna apenas o campo nome do índice 0 do array