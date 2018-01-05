$(function () {

    //01) quero que só a div desapareça
    // uma das formas mais fáceis seria selecionando a div e usa o comando hide()

    //$('.div').hide();

    //ele coloca no elemento style="display:none;"

    //---------------------------------------------------------------------------------------------

    //02) para aparecer na tela

    //$('.div').show();

    //---------------------------------------------------------------------------------------------

    //03) podemos passar um parâmetro tanto pro hide() quanto pro show() para que o elemento apareça ou desapareça aos poucos

    //$('.div').hide('slow'); //pode usar o 'fast' (mais rápido)

    //$('.div').show('slow');

    //---------------------------------------------------------------------------------------------

    //04) pode usar o .toogle() pra aparecer e desaparecer também:

    //$('.div').toggle(); //se o elemento estiver visível, fica invisível, e vice-versa

    //posso uar com 'fast' e 'slow' também:

    //$('.div').toggle('slow');

    $('.botao').bind('click', function () {
        $('.div').toggle('fast');
    });





});