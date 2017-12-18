$(function () {

    //01) adicionar a classe css 'fundoVermelho' no h1:

    $('h1').addClass('fundoVermelho');

    //--------------------------------------------------------------------F

    //02 Remover uma classe de um elemento: 

    //$('h2').removeClass('fundoVerde');

    //--------------------------------------------------------------------

    //03) verificar se um elemento tem uma classe em específico:
    //retorna um true ou false

    if($('h2').hasClass('fundoVerde')){

        //alert('tem sim!');
        
    }

    //--------------------------------------------------------------------

    //04) Adicionar uma css específica em um elemento:

    $('h3').css('color', '#0000FF');
    $('h3').css('font-size', '15px');

    $('button').css('border', '1px solid #000').css('color', '#FFF');

    $('button').addClass('fundoVermelho');










});