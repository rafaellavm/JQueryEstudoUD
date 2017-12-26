$(function () {

    //01) pra aplicar métodos nativos do javascript em jquery é necessário transformar o jquery em nativo antes

    var elemento = $('li').eq(0); //cria um array

    console.log(elemento);

    //retorna o elemento fora do array
    var result = elemento[0];

    console.log(result);

    //agora sim pode incrementar o innerHTML nele (nativo do javascript)

    result.innerHTML = "Trocando o texto";


});