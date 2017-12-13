$(function () {

    //01) Aplicar jquery no elemento

    var div = document.getElementById("div");
    $(div).html("Novo texto");
    $(document.getElementById('div')).html('Novinho em folha');
    //console.log(div);

    var div2 = $('#div');

    console.log(div2);

});