$(function () {

    //01) efeito para desaparecer o elemento com efeito
    //$('.div').fadeOut();

    //02) efeito para APARECER o elemento com efeito
    //$('.div').fadeIn();

    //obs: o show() diminui o elemento até desaparecer, o fadeIn e fadeOut some e aparece aos poucos, essa é a diferença

    //03) efeito que diz em qual etapa do efeito ele vai parar

    //$('.div').fadeTo('slow',0.5); //o elemento fica levemente mais claro, e a opacidade diminui devagar body > div.div

    //04) se o elemento estiver aparecendo, ele dá um fadeOut, ao contrário, fadeIn()

    //$('.div').fadeToggle('slow');

    $('.botao').bind('click',function(){
        $('.div').fadeToggle('slow');
    });
    
});