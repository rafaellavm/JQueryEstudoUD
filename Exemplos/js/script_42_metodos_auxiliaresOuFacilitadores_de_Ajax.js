$(function () {

    //01) Ao clicar no botão de ação ele vai carregar um outro arquivo dentro da div usando ajax
    //isso sem precisar recarregar a página

    $('button').bind('click', function () {

        //console.log('entrou');
        //$('.div').load('teste.html'); //primeira forma para carregar com AJAX. Mas não funcionou perfeitamente


        $.get('teste.html',function(data){
            //console.log(data);
            $('.div').html(data);
        });

        /*$.ajax({
            url: './teste.txt',
            method: 'get',
            success: function (data) { //ele chama o arquivo depois manda o resultado para variável 'data'
                 $('.div').html(data);
            }
        });*/

    });



});

