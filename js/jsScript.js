 var options = {
     offset:500
 };
var header = new Headhesive('.hedaer_menu,options');

 $('a[data-target="anchor"]').bind('click.smoothscroll',function(){
     var target = $(this).attr('href'),
         bl_top = $(target).offset().top - 55;
     $('body,html').animate({scrollTop: bl_top}, 1000);
     return false;
 })
 function myFunction (){
var x=document.getElementById("myTopnav");
if( x.className === "menu"){
    x.className +=" responsive";
}else{
x.className ="menu";
}
};

