$(function () {

    //01) mousedown: ato de apertar (não é clicar!) o mouse em um elemento

    $(".botao").bind('mousedown', function(){
        console.log('apertou o mouse!');
    });

    //-----------------------------------------------------------------------------

    //02 evento 'mouseup': ação quando soltar o mouse no elemento

    $('.botao').bind('mouseup', function(){
        console.log('Soltou o mouse!');
    });

    //-----------------------------------------------------------------------------

    //03 evento 'mousemove': mover o mouse dentro da área do elemento

    /*$('.botao').bind('mousemove', function(){
        console.log('moveu o mouse!');
    });*/

    //-----------------------------------------------------------------------------

    //04 evento 'mouseover': quando o mouse está em cima do elemento (somente uma vez)

    $('.botao').bind('mouseover',function(){
        $(this).addClass('botao_encima');
    });

    //mouseout remove o mouseover (quando sai da área do elemento)

    $('.botao').bind('mouseout',function(){
        $(this).removeClass('botao_encima');
    });

    //-----------------------------------------------------------------------------

    //05 evento 'click': parecido com 'mouseup'. Evento do click do elemento

    $('.botao').bind('click',function(){

    });


    //-----------------------------------------------------------------------------

    //06 evento 'dblclick': 'double click' no elemento

    $('.botao').bind('dblclick',function(){
        console.log('deu dois cliques em um elemento');
    });
});