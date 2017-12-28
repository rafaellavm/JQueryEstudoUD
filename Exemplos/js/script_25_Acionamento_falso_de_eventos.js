$(function () {

    //01) desejo acionar o evento sem precisar clicar no mouse
    
    //quando dar ENTER ele vai clicar automaticamente no botão

    //na resolução abaixo quando eu clicar em um botão automaticamente vai ser 'clicado' no outro botão

     $('#btn1').bind('click',function(){

         //console.log('Clicou no botão 1!');
         $('#btn2').trigger('click');
     });

     $('#btn2').bind('click',function(){

         console.log('Clicou no botão 2!');
     });
        


});
