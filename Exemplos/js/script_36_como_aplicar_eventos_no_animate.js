$(function () {

    //01) desejo mudar o css do elemento com animação

    $('.botao').bind('click', function () {

        $('.div').animate({
            'top': 50,
            'left': 700,
            'height': 50,
            'width': 50,
            'font-size': 24
        }, {
                duration: 1500,
                step: function () { // função a ser chamada em cada etapa da animação. A cada pixel que for alterado ele vai ser chamado
                    console.log('Nova etapa...');
                },
                complete: function () { //função chamada quando completa a animação. Nesse caso, ao acabar a animação vai ser chamada outra
                    $('.div').animate({
                        'top': 0,
                        'left': 0,
                        'height': 150,
                        'width': 150,
                        'font-size': 14
                    },1500);
                },
                start: function () { //função a ser executada quando a animação começar
                    console.log('Animação começou!');
                }
            });
    });

});