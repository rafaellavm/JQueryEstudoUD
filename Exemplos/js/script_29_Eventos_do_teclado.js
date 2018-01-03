$(function () {

    //01) aplicando evento no formulário (quando clica no submit), é um evento de submit:

    /*$('#nome').bind('keydown',function(){ //quando clica na tela
        console.log('a tecla foi apertada');
    }); 

    $('#nome').bind('keyup',function(e){ //quando solta a tecla
        console.log('a tecla foi solta');
        console.log('a tecla que foi apertada foi: ' + e.keyCode);
    });*/

    $('#nome').bind('keydown',function(e){ //Caso soltar o ENTER
        if(e.keyCode == 81){ //q
            var txt = $(this).val();
            console.log(txt);
            $(this).val('');
        }
    });

    
});



