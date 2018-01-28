 var header = new Headhesive('.hedaer_menu');

 $('a[data-target="anchor"]').bind('click.smoothscroll',function(){
     var target = $(this).attr('href'),
         bl_top = $(target).offset().top - 45;
     $('body,html').animate({scrollTop: bl_top}, 1700);
     return false;
 })
