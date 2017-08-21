$(document).ready(function()
{
    changeNavColor();
    scroll();
});

$(window).scroll(function(){
   changeNavColor();
});

function changeNavColor()
{
    
    var navHeight = $('#bottom-nav').height();
    
        var actualPos= $(window).scrollTop();
        if(actualPos>navHeight)
        {
            $('#top-nav').fadeOut( "100", function() {
            // Animation complete.
            });
            
            $('#top-nav').css( "opacity" ) = "1";
        }
    
        else
        {
            $('#top-nav').fadeIn( "100", function() {
            // Animation complete.
            });
        }
       
}
function scroll()
{
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });
        
}