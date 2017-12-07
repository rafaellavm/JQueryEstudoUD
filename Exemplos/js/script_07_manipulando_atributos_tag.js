$(function () {

    //altera PROPRIEDADES do elemento
    $('a').attr('href', 'http://www.google.com.br');

    //mudar a propriedade largura e borda da imagem
    $('img').attr('width', '250');
    $('img').attr('border', '5');

    //para retornar o valor da propriedade 'border'
    console.log($('img').attr('border'));

    //mudar a propridade 'src' da imagem
    $('img').attr('src', 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');

});





