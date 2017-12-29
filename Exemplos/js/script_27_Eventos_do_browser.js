$(function () {

    //01) selecionar o evento da div, no caso o scroll

    /*$('#div').bind('scroll',function(){
        console.log('Scrollou!');
        $(this).css('background-color','green');
    });*/

    //assim quando rolar o scroll ele vai colocar o fundo verde

    //-----------------------------------------------------------------------------------------

    //02 quando for mudar o tamanho da tela ele imprime

    $(window).bind('resize',function(){
        console.log('MUDOU O TAMANHO DA TELA');
    });
});



