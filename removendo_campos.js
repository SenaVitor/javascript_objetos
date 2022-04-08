const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

const delProp = delete objPersonagem.aliado //retorna true
const delPropInexistente = delete objPersonagem["endereco"] //Se tentarmos deletar um campo inexistente o retorno também será true

console.log(delProp) //true
console.log(delPropInexistente) //true