// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $('.flip').click(function() {
        console.log("replace image");
        if ($(this).hasClass( "active" )) {
            $(this).removeClass( "active" );
        } else {
         $(this).addClass( "active" );
        }
    });
});