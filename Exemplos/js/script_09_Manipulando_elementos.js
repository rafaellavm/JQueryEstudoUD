$(function(){

    //1) substitui conteúdo da classe 'teste' por um escrito
    //$('.teste').html('Novo texto');

    //2) substitui conteúdo da classe 'teste' por um html
    //$('.teste').html('Esse é um <strong>texto</strong>');

    //3) substitui conteúdo da classe 'teste' por um texto
    $('.teste').text('Esse é um NOVO texto');

    //retornando o valor do atributo
    console.log(('#teste2').attr('id'));
});