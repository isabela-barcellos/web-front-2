//calcular IMC
const prompt = require('prompt-sync')()


function getUserInfo (){
     let peso =Number(prompt("Qual é o seu peso?"))
     let altura = Number(prompt("Qual é sua altura?"))
     return {
        pesoDoUsuario: peso,
        alturaDoUsuario: altura,
     }
//  let peso = 5
//  let altura = 10
//  se as variáveis foram criadas dentro da função,não tem como acessar por fora 
//  por isso a importância do escopo 
}

function imc(pesoInformado, alturaInformada){
    return pesoInformado / alturaInformada**2
    //parâmetro: o que precisaser feito e essa funçãao é independente da de cima,
    //só serão dependentes, se forem chamadas uma dentro da outra
}

function main(){
    let peso = getUserInfo().pesoDoUsuario
    let altura = getUserInfo().alturaDoUsuario
    let resultadodoImc = imc(peso,altura)

    console.log(`O seu imc é ${resultadodoImc==24? 'você está ok': 'Você não está ok'} , e sua faixa`)
    //precisa ter crase no console log
}

main() //precisa chamar a função pra ser executada 
//prompt recebe string, tem que mudar de string para número



//
function imprimir(a){
console.log(a)

}

//jeito mais fácil
const imprimir = a => {
    console .log(a)
}
imprimir()

btn1.addEventListener('click', ()=>{
    //exutar alguma função quando o botão for clicado 
})

btn1.addEventListener('click', function clicar(){
    
})