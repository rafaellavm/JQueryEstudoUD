$(function () {

    //01) quero alterar terceiro elemento da lista

    var elemento = $('li').eq(2);

    elemento.html('<button>Texto alterado usando botão!</button>').css('color','green');

    //01) quero remover item da lista

    var elemento2 = $('li').eq(3);
    elemento2.remove();


});