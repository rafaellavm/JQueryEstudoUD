$(function () {

    //01) enviar o formulário pelo ajax
    //quando eu dar um 'submit' no meu formulário ele vai dar um serialize no formulário e salvar as informações no txt
    //o serialize pega todas as informações do formulário e deixa prontas pra enviar por ajax

    $('#form').bind('submit', function (e) {

        e.preventDefault();

        var txt = $(this).serialize(); 

        console.log(txt);
    });

});

