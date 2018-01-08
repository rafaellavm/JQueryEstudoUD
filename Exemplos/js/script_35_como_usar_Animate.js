$(function () {

    //01) desejo mudar o css do elemento com animação

    $('.botao').bind('click',function(){
        
        $('.div').animate({
            'margin-left': 100,
            'margin-top': 20,
            'width': 500,
            'border-radius': 75
        },1000); //tempo do efeito: 1s
    });

});