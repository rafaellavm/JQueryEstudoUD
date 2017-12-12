$(function () {

    //1) substitui conteúdo da classe 'teste' por um escrito
    //$('.teste').html('Novo texto');

    //2) substitui conteúdo da classe 'teste' por um html
    //$('.teste').html('Esse é um <strong>texto</strong>');

    //3) substitui conteúdo da classe 'teste' por um texto
    //$('.teste').text('Esse é um NOVO texto');

    //4) retornando o valor do atributo
    //console.log(('#teste2').attr('id'));

    //5) Busca um elemento e muda o atributo width dele
    //$('#teste2').find('img').attr('width','10');

    //5.1) outra forma mais direta:
    //$('#teste2').find('img').width('500');

    //6) Atribuir valor ao input (A mais 'certa' forma de alterar o value de um imput)
    //Isso não funciona para 'divs' pois eles não tem o atribudo 'value'
    //$('input').val('Teste');

    //6.1) Alterar o atributo value do input:
    $('input').attr('value', 'Teste do input');

    //7.0) Adicionar um elemento APÓS o outro:
    $('input').after('<div>Texto após o input utilizando .after() </div>');

    //7.1) Adicionar um elemento ANTES do outro:
    $('input').before('<div>Texto antes do input utilizando .before()</div>');

    //7.2) Inserir um 'li' dentro do ul
    //O append adiciona conteúdo quando já existe um. Quando não, se usa o '.html() (esse substitui)'
    //APPEND: adiciona
    //HTML: Substitui
    $('ul').append('<li>Item 5</div>');
    $('.teste').append('<br> Um texto depois do botão usando .append() <hr>');

    //7.3) Pra adicionar um item no <ul> antes do primeiro <li>:
    //É adicionado antes do conteúdo
    $('ul').prepend('<li>Item 0</li>');

    $('.teste').prepend('Um texto antes do botão usando o .prepend()<br>');

    //8.0) Remover o campo input: 
    //$('input').remove();
});