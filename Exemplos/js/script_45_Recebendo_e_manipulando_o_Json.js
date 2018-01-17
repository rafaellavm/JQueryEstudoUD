$(function () {

    $('#form').bind('submit', function (e) {

        e.preventDefault();

        var txt = $(this).serialize(); 

        console.log(txt);

        $.ajax({
            type: 'POST',
            url: 'ajax_45.php',
            data: txt, //enviando os dados da variável 'txt'
            dataType: 'json', //vai retornar tipo json
            success: function (json) { //retorno com sucesso da função
                //$('.div').html('Meu nome é ' + json.nome + " e tem " + json.qt_nome);
                if (json.status == 'ok') {
                    console.log('deu certo!');
                }
                else {
                    console.log('deu errado!');
                }
                
            },
            error: function () {
                console.log('Ocorreu um erro');
            }
        });
    });

});

