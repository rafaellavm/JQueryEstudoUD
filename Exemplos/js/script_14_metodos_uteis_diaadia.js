$(function () {

    //01) pegar o conteudo da div com id 'algo' => $.trim(valor)

    var valor1 = $('div').html();
    //console.log(valor1);

    //pra retirar todos os espaços que existem no texto:
    //$.trim(valor)

    var valor2 = $('div').html().trim();
    //console.log(valor2);

    //------------------------------------------------------------------------------------------

    //02) desejo varrer a lista utilizando o $.each()

    $('li').each(function () {

        //console.log($(this).html());
    });

//------------------------------------------------------------------------------------------

//03) quero saber qual o tipo da minha variável

var idade = 90;

//console.log($.type(idade)); //number

var nome = "Rafaela";

//console.log($.type(nome)); //string

//utilizando o javascript puro:

//console.log(typeof nome);

//------------------------------------------------------------------------------------------

//04) Desejo saber se a variável é um número $.isNumeric()

console.log($.isNumeric(idade)); //true

//------------------------------------------------------------------------------------------

//05) Pra saber se uma variável é um array

var array = $('li');

console.log($.isArray(array)); //false

//------------------------------------------------------------------------------------------

//06) Pra saber se uma variável é uma funcao

var li = $('li').each(function () {

        //console.log($(this).html());
    });

 console.log($.isFunction(li));   


//existem várias funçoes!!!


});