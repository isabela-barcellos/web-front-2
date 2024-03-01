const listaFilmes = document.querySelector("#listaFilmes")
let filmes = [{
    nome:'Harry Potter',
    lancamento : 2001,
    rating:10
},{ 
    nome : 'Senhor dos aneis',
    lancamento: 2001,
    rating:9

}]
console.log(filmes[0].nome)
//interativa por isso let
//filme.push = push('Senhor dos Aneis')
//filmes.pop()remove smpre o últim elemento

window.onload = ()=>{//quando a tela carregar vai fazer 
    for(let i=0; i < filmes.length; i++){
        let listaItem = document.createElement('li')
        listaFilmes.append(listaItem)
        listaItem.innerHTML = filmes[i].nome

    
        let ratingItem = document.createElement('li')
        listaFilmes.append(ratingItem)
        ratingItem.innerHTML = filmes[i].rating

     }
 }

//  filmes.forEach((variavelFilme)=>{
//     console.log(variavelFilme.nome)
//  })

filmes.forEach((variavelFilme)=>{
    console.log(variavelFilme.nome + "-vai corinthians")
 })

 filmes.filter((variavelFilme)=>{
    console.log(variavelFilme.nome + "-vai corinthians")
 })