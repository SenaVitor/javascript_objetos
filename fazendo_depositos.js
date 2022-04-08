const cliente = {
    nome: "Mayk",
    idade: 21,
    cpf: 70889039092,
    email: "mayk@gmail.com",
    fones: ["85989923453", "88978980234"],
    dependentes: [
        {
            nome: "Yan",
            parentesco: "filho",
            dataNasc : "22/02/2022"
        },
        {
            nome: "Ana",
            parentesco: "filha",
            dataNasc: "04/07/2020"
        }

    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)