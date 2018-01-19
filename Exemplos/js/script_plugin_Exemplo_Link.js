(function($){

   $.fn.showRealLink = function(){

       //percorrendo os elementos
       this.each(function(){

           var link = $(this).attr('href');
           $(this).append('(' + link + ')');
       });

       return this;
   }

}(jQuery));