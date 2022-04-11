const clientes = [
    {
        nome: "Mayk",
        idade: 21,
        cpf: 70889039092,
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
        ]
    },
    {
        nome: "João",
        idade: 34,
        cpf: 54489019274,
        dependentes: [
            {
                nome: "Larissa",
                parentesco: "filha",
                dataNasc : "13/06/2007"
            }
        ]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes);