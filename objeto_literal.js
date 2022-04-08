const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = objPersonagem //Faz uma referência ao objPersonagem
   //Assim quando o valor de um campo de objPersonagem2 for modificado o valor desse mesmo campo de objPersonagem será modificado
   objPersonagem2.nome = "Dumbledore" //objPersonagem.nome teve seu valor modificado para "Dumbledore"

   const objPersonagem3 = Object.create(objPersonagem) //Desse modo é criada uma cópia de objPersonagem em objPersonagem3
   //Assim mesmo se o valor de um campo de objPersonagem3 for modificado, o valor desse campo em objPersonagem não sofrerá alterações
   objPersonagem3.nome = "Gandalf, o Cinzento" //Muda o campo nome de objPersonagem3, mas o campo nome de objPersonagem continua como "Dumbledore"
   
   console.log(objPersonagem.nome) //Dumbledore
   console.log(objPersonagem2.nome) //Dumbledore
   console.log(objPersonagem3.nome) //Gandalf, o Cinzento