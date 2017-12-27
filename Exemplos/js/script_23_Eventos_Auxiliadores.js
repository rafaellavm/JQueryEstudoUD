$(function () {

    //01) .hover(): ele substitui o mouseouver e o mouseout

    //ao invés:

    /*$('button').mouseover(function () {
        $(this).addClass('fundoVermelho');
    });

    $('button').mouseout(function () {
        $(this).removeClass('fundoVermelho');
    });*/

    //utilizar:
    //ele recebe duas funções, a primeira é quando passa o mouse no elemento, a segunda é quando tira o mouse do elemento

    $('button').hover(function () {
        $(this).addClass('fundoVermelho');
    }, function () {
        $(this).removeClass('fundoVermelho');
    });

    //ou então utilizar o .toggleClass()


});
