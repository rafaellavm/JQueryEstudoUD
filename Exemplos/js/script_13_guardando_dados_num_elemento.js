$(function () {

//01) ADICIONANDO UMA PROPRIEDADE AO ELEMENTO:
//é um recurso do html5

$('input').attr('data-idade',90);

//pra verificar o valor guardado:

$('input').data('idade',90);

//---------------------------------------------------------------------

//02) desejo salvar na memória o número de caracteres de um texto que eu digitei no input:
$('input').data('caracteres',$('input').val().length); //esse valor fica guardado na memória

//03) digitando:
$('input').data('caracteres') 

//...vc consegue recuperar o valor que está guardado na memória

//o valor fica guardado na memória! Isso é bom pra ser utilizado caso deseje salvar dados

});