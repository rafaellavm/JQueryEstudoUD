$(function () {

    //01) efeito .slideUp() diminui a altura

    //$('.div').slideUp();

    //02) .slideToggle() diminui e aumenta a altura, alternando

    //$('.div').slideToggle();

    //03) atribuindo velocidade:

    //$('.div').slideUp('slow');
    //$('.div').slideDown('slow');

    //04) Aplicando o efeito no botão:

    $('.botao').bind('click',function(){

        $('.div').slideToggle('slow'); //ou 'fast'
    });

    $('.hellobar').bind('click',function(){
        $(this).slideUp('slow');
    });




   
});