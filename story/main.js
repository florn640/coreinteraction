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