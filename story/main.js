// A $( document ).ready() block.
$( document ).ready(function() {
    $('.flip').click(function() {
        if ($(this).hasClass( "active" )) {
            $(this).removeClass( "active" );
        } else {
         $(this).addClass( "active" );
        }
    });
});

$( document ).ready(function() {
   // use the below to get a random page
    var a = location.pathname.split("/");
    $.each( a, function( i, l ){
     console.log(l);
      if (l == 'index.html') {
        var num = getRandomInt(1,9);
        console.log(num);
        window.location.replace(num+".html");
      }
    });
  
    // use the below to check the position of
    // of the cursor and add active classes.
    var width = $( window ).width();
    var currentMousePos = { x: -1, y: -1 };
  
  
    $(document).mousemove(function(event) {

        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
       
        if (currentMousePos.x > width/2) {
          if ($('.flip').hasClass('active')) {
              $('.flip').removeClass('active');
             
          }
          // code to switch cursor icon on the right
          $(".right-click").css( 'cursor', 'url(cursor.png), auto' );
        } else {

          if ($('.flip').hasClass('active')) {
              
          } else {
            $('.flip').addClass('active');
          }
          // code to switch cursor icon on the left
          $(".left-click").css( 'cursor', 'url(images/cursor.png), auto' );
        }
      
    });
});

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}