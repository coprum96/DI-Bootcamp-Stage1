
// closing navbar on click -- since it stays open on its own //
$(document).on('click',function(){
    $('.collapse').collapse('hide');
    })
    
    
    //Smooth scrolling of HTML anchor links
    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();
    
            var target = this.hash,
            $target = $(target);
    
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing')
        });
    });
    
    
    // Changing the color of the fixed navbar when scrolled
    $(document).ready(function($) {
      $(window).scroll(function() {
        var scrollPos = $(window).scrollTop(),
            navbar = $('.navbar-default');
        
        if (scrollPos > 20) {
          navbar.addClass('change-color');
        } else {
          navbar.removeClass('change-color');
        }
      });
    });
    
    
    // Adding Animate.css class when scrolled into viewport
    function isScrolledIntoView(elem) {
        var $window = $(window),
            docViewTop = $window.scrollTop(),
            docViewBottom = docViewTop + $window.height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).outerHeight() - 200;
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    $(window).on("scroll", function() {
      
        $('.fade').each(function() {
            if (isScrolledIntoView(this)) {
                $(this).addClass('animated fadeInUp');
            }     
          
        });
    });