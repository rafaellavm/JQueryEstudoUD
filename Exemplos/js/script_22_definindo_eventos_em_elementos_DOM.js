$(function () {

    //01) criando um evento click pro botão, colocando uma classe nele mesmo, ou retirando

    /*$('button').click(function(){

        if($(this).hasClass('fundoVermelho')){
            $(this).removeClass('fundoVermelho');
        }else{
            $(this).addClass('fundoVermelho')
        }
        
    });*/

    //02) Outra forma de fazer isso é utilizando o .toggleClass()
    //ele vai alternar a classe

    $('button').click(function () {

        $(this).toggleClass('fundoVermelho');

    });

    //03) evento mouseOver: quando passar o mouse no botão
    //mouseout: quando tira o mouse do botão

    $('button').mouseover(function () {
        $(this).addClass('fundoVermelho');
    });

    $('button').mouseout(function () {
        $(this).removeClass('fundoVermelho');
    });

});
