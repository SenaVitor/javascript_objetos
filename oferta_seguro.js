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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

//Retorna um array com as chaves do objeto
//console.log(Object.keys(cliente));  

//Retorna um array com os valores das chaves do objeto
//console.log(Object.values(cliente));  

//Retorna um array com as chaves do objeto e seus respectivos valores
//console.log(Object.entries(cliente)); 

oferecerSeguro(cliente);