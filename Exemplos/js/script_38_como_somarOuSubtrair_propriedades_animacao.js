$(function () {

    //01) situação: sempre quando eu clicar no botã1 o 'margin' vai aumentar de 50 em 50 pixels pra esquerda
    //o botão2 aumenta pra direita

    $('#btn1').bind('click',function(){

        $('.div').animate({
            'margin-left': '-=50'
        },500);
    });

    
    $('#btn2').bind('click',function(){

        $('.div').animate({
            'margin-left': '+=50'
        },500);
    });
    
});