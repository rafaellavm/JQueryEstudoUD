$(function () {

    //01) aplicando evento no formulário (quando clica no submit), é um evento de submit:

    /*$('#form').bind('submit',function(e){

        e.preventDefault();

        alert("o formulário foi submitado");
    });*/

    //-------------------------------------------------------------------------------------------------

    //02) Evento no input com name='nome'
    // Ele dispara o evento quando selecionamos o conteúdo dentro do input

    $("input[name$='nome']").bind('select',function(){

        console.log("o conteúdo do input 'name' foi selecionado");

    });

   //-------------------------------------------------------------------------------------------------

    //03) Evento de foco dentro do input 
    // quando são múltiplos elementos é só separar os ids por vírgula
    //assim q 'focar' no input ele muda o background

    /*$('#nome, #email').bind('focus',function(){  //qiando é 'focado'
        $(this).addClass('focado');
    });

    $('#nome, #email').bind('blur',  function(){ //quando é 'desfocado'
        $(this).removeClass('focado');
    });*/

    //-------------------------------------------------------------------------------------------------

    //04) Evento change :quando a opção do select é mudada

    $("select[name$='idade']").bind('change', function(){
        console.log($(this).val());
    });



});



