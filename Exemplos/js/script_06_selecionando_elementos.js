$(document).ready(function(){

    //selecionando classe dentro do li
    //console.log($('li.botao'));

    //selecionando classe dentro do ul
    console.log($('ul.lista2 li.botao'));

    //pra saber se elemtndo tem a classe
    if($('.botao').length > 0){
        //porque retorna um array
        alert('tem botão na página');
    }
});







