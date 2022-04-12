const jsonLivro = JSON.stringify({ //JSON.stringify -> converte um objeto JavaScript para o formato JSON
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)
   console.log(JSON.parse(jsonLivro)) // JSON.parse -> converte JSON para um objeto JavaScript