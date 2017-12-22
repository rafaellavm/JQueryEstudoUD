$(function () {

    //01) quero desativar um campo

    $('#nome').attr('disabled', 'disabled');

    //------------------------------------------------------------------------------------------

    //02) quero ATIVAR um campo, removendo o atributo disabled

    $('#nome').removeAttr('disabled');

    //------------------------------------------------------------------------------------------

    //03) desativando o checkbox:

    $('#arquivo').attr('disabled','disabled');

    //------------------------------------------------------------------------------------------

    //04) pra selecionar o campo do checkbox:

    $('#arquivo').attr('checked','checked');

    //------------------------------------------------------------------------------------------

    //05) pra remover o checked do checkbox:

    $('#arquivo').removeAttr('checked');

});