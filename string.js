//Métodos para Strings

const palavra="Vitor";

//.length -> retorna o tamanho da string
console.log(palavra.length) //5

//charAt() -> retorna a letra do indice da string informado (Obs: em JS strings são arrays)
console.log(palavra.charAt(3)) //o
//Pode-se obter esse mesmo resultado da seguinte forma:
console.log(palavra[3]) //o

//indexOf() -> retorna o primeiro índice da string onde se encontra o caractere informado
console.log(palavra.indexOf("V")) //0

//toUpperCase() e toLowerCase() -> retornam a string em maiúsculo (toUpperCase) e minúsculo (toLowerCase) respectivamente
console.log(palavra.toUpperCase()) //VITOR
console.log(palavra.toLowerCase()) //vitor

//substr() -> retorna a parte informada da string (são informados os índices inicial e final da parte desejada)
let frase= "mergulhando em tecnologia."
console.log(frase.substr(0,11)) // mergulhando

//slice() -> retorna a parte informada da string (são informados os índices inicial e final da parte desejada)
console.log(frase.slice(0,11)) // mergulhando

//replace() -> substitui  uma string (ou uma parte dela) por outra string
let nome = "André";
let comunicacao = "Olá, sr. nomeusurario, informamos que o senhor possui 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario",nome)); //substitui apenas a parte "nomeusuario" pelo nome (André)
console.log(comunicacao.replace(comunicacao,nome)); //substitui toda a string pelo nome (André)

//concat() -> concatena duas ou mais strings
console.log("Olá ".concat(nome).concat(", estamos ").concat(frase)); //Olá André, estamos mergulhando em tecnologia.

//split() -> retorna a string com uma quebra de linha no local do caractere informado 
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);

//trim() -> retorna uma string removendo os espaços em branco no início e no final da mesma
let login = "   andre@emailteste.com      ";
console.log(`Usuário ${login.trim()}: logado`);
console.log(`Usuário ${login.trimEnd()}: logado`); //remove apenas o espaçamento do final da string
console.log(`Usuário ${login.trimStart()}: logado`); //remove apenas o espaçamento do início da string
console.log(`Usuário ${login.trimLeft()}: logado`); //remove apenas o espaçamento do final da string (recomendado utilizar o trimEnd em seu lugar)
console.log(`Usuário ${login.trimRight()}: logado`); //remove apenas o espaçamento do início da string (recomendado utilizar o trimStart em seu lugar)