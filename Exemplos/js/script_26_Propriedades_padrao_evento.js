$(function () {

    //01) mostrar o texto do input ao clicar o botão

    /*$('#botao').bind('click',function(){

        var txt = $('#nome').val();
        alert(txt);
    });*/

    //mas ao clicar no botão ele envia o formulário (refresh na página), mas eu não desejo isso
    //passando o e como parâmetro vc consegue acessar a propriedade interna do elemento

    //então eu quero que, ao clicar no botao, ele PARE a funcao nativa de 'click', pois não desejo que envie o formulário

    /*$('#botao').bind('click',function(e){

        e.preventDefault();
        var txt = $('#nome').val();
        alert(txt);
    });*/

    //e.preventDefault() = previne a ação padrão do objeto, no caso o botão com seu evento de 'click'

    //---------------------------------------------------------------------------------------------------------------------------

    //02) caso eu deseje dar um alert no evento do elemento

    /*$('#botao').bind('click',function(e){

        e.preventDefault();

        alert(e.type);

    });*/

//outra forma de fazer:

$('#botao').bind('click',eventoDoBotao);
$('#botao').bind('mouseover',eventoDoBotao);


});

//outra forma de fazer:
function eventoDoBotao(e) {
    e.preventDefault();
    alert(e.type);

    //mostra qual elemento foi feita a ação

    console.log(e.target); // ou $(this)
}



