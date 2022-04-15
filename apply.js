function imprimeNomeEmail(tipoCliente, agencia){
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
const cliente2 = {
nome: "Fred",
email: "f@email.com"
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

//Utilize o método apply() caso você tenha um array de dados 

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com