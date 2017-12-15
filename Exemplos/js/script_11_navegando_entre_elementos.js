$(function () {

    //01) selecionar a partir da classe "filha" (no span) um elemento acima dela (a div)
    //o 'span' está dentro dessa 'div'
    //Seleciona um elemento ANTES
    $('.filha').parent();
    $('.filha').parent().parent(); // vai para div com classe 'topo'

    //--------------------------------------------------------------------

    //02) Agora fazer o sentido contrário: navegar da div principal até a o span 'filha' que está dentro dela:

    //primeira forma:
    //console.log($('.site').find('.filha'));

    //segunda forma:
    $('.site').find('.topo').find('.filha');

    //--------------------------------------------------------------------

    //03) Do 'body' selecionar a primeira 'div' dentro dele:
    var x = $('body').find('div').eq(0);
    //console.log(x);

    //OU da div 'conteudo' até a chegar a div pai dela:
    var y = $('.conteudo').parent();
    //console.log(y);

    //--------------------------------------------------------------------

    //04) Indo pra segunda parte:
    // Estou na div 'irmao2' e quero saber qual div tem a classe 'topo2' (acima dele no caso)
    //isso é usado quando não se sabe quantos 'parents' precisa chegar até ele

    //closest() = "ache o elemento mais perto"
    var m = $('.irmao2').closest('.topo2');
    //console.log(m);

    //--------------------------------------------------------------------

    //05) Estou na div 'irmao2' e preciso chegar até 'conteudo2',separado dele mas dentro da div principal
    //eles não possuem NENHUMA relação entre eles, somente estão dentro da mesma div principal

    //no caso temos que 'subir' até a div principal 'site2' e dela ir pra div 'conteudo2':

    var n = $('.irmao2').closest('.site2').find('.conteudo2');
    console.log(n);









});