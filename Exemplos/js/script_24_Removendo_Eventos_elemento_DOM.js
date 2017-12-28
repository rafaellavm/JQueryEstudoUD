$(function () {

    //01) outra forma de adicionar um evento para um elemento utilizando o .bind()

        //$('button').bind('click',function(){
            //console.log('clicou!');
        //});

        $('button').bind('mouseover',function(){
            $(this).addClass('fundoVermelho');
        });

        $('button').bind('mouseout',function(){
            $(this).removeClass('fundoVermelho');
        });

    //pode usar o on() também:

        //$('button').on('click',function(){

        //});

    //----------------------------------------------------------------------------------------

    //02) Pra remover um evento .unbind():

        //$('button').unbind('click');

    //pode utilizar também o .off()

        //$('button').off('click');


});
