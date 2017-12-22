$(function () {

    //01) quero pegar item selecionado dentro de um select

    console.log($('#idade').val()); //já seleciona a opção escolhida

    //------------------------------------------------------------------------------------------

    //02) pra mudar atributo de um item específico dentro do select
    $('#idade').find('option').eq(1).attr('selected','selected');



});