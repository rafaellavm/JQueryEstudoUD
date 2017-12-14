$(function () {

    //01) Aplicar jquery no elemento

    var div = document.getElementById("div");
    $(div).html("Novo texto");
    $(document.getElementById('div')).html('Novinho em folha');
    //console.log(div);

    var div2 = $('#div');

    //console.log(div2);

    //02) Numa lista, selecionar o segundo item dele:

    //coloca eq(1) porque começa do 0
    //console.log($('li:eq(1)'));

    //ou então selecionar todos os elementos e depois selecionar só elemento
    //console.log($('li').eq(1));

    var segundoItem = $('li').eq(1);
    segundoItem.html('Segundo item');


});