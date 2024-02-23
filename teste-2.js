const divListaFilmes = document.querySelector('#listaFilmes');
const btn1 = document.querySelector('button');
//Criamos o item lista
const itemLista = document.createElement('li');
const inputTexto = document.querySelector('#filmeInput')


btn1.addEventListener('click',()=>{
   // window.alert('Hello');
    //adicionamos à nossa lista
    divListaFilmes.append(itemLista);
    //adicionar texto ao elemento
    //itemLista.innerHTML = "<strong>Harry Potter</strong>"
    //adicionar texto dinâmico ao elemento
    itemLista.innerHTML = inputTexto.value
    //mudar o css
   itemLista.style.backgroundColor = 'red'
   //mudar o texto de um h1
   titulo.innerHTML(itemLista)

   //innerHTML - adicionar algo dentro do HTML

})