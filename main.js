$(document).ready(function(){
  $('.up').hide(); 
    
    $(window).scroll(function(){
       if($(this).scrollTop() > 100 ){
           $('.up').fadeIn();
       } else{
           $('.up').fadeOut();
       }
    });
    
    $('.up').click(function(){
       $('body, html').animate({
          scrollTop: 0 
       }); 
    });
    
   $(".up").on('click', function (e) { 
       e.preventDefault();
     $("body,html").animate({
    scrollTop: 0
          },700);
        return false; 
   });  
  
   
 

       
});