$(function () {

    //01) parar a animação quando clicar no segundo botão. O primeiro botão inicia a animação
    //clicando no botão2 a animação para, mas ao clicar no botão1 novamente a animação continua do ponto que parou

    $('#btn1').bind('click',function(){

        $('.div').animate({

            'margin-left': 500
        }, 2000);
    });

     $('#btn2').bind('click',function(){

         $('.div').stop();
    });
});