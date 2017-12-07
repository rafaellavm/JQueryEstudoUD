$(function(){

    //trocar o texto dentro da div
    $('#teste').html("Texto mudado");

    //pra saber qual conteúdo tem dentro da div 'teste'
    console.log($('#teste').html());

    //retirar TUDO que está dentro do id 'teste2' e colocar um texto
    $('#teste2').html('Novo texto');

     //retirar TUDO que está dentro do id 'teste2' e colocar (substituir) um botão
    $('#teste2').html('<button>botão adicionado</button>');

    //pra RETORNAR tudo que tem dentro da div 'teste2'
    console.log($('#teste2').html());

    //colocar a classe 'estilo' dentro do botão e mudar o nome do botão
    $('#teste2').find('button').addClass('estilo');

    $('#teste2').find('button').html('Novo nome do meu botão');

});
