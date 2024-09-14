
$(window).bind("load", function () {
    $(".loader-screen").hide();
}); 




$(document).ready(function () {
    

  $('.banner-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:false,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:1,
            dots:false,
            
        },
        1000:{
            items:1,
        }
    }
  })
  

  $('.testimonial-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
        }
    }
  })


  $('.client-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:4,
            
        },
        1000:{
            items:6,
        }
    }
  })

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".main-header").addClass("sticky");
        } else {
            $(".main-header").removeClass("sticky");
        }
    }); 
   


    
        $(".menu-toggle").click(function () {
            $(".menu").toggleClass("slide-left");
            $(this).find('i').toggleClass('fa-bars fa-times')
        });
        

        $(".enquiry").click(function(){
            $(".enquiry-popup").fadeIn(300);
          });
          $(".close-pop").click(function(){
            $(".enquiry-popup").fadeOut(300);
          });

          $("#cross").click(function(){
            $(".offer-banner").fadeOut(300);
            $(".offer-overlay").fadeOut(300);
          });
          $(".offer-overlay").click(function(){
            $(".offer-banner").fadeOut(300);
          });

        //   $("#career-expand").click(function(){
        //     $(this).next("#career-details").slideToggle("slow");
        //   });

        $(".apply4job").on("click",function(){
			var $this = $(this);
			$this.next().slideToggle();
			if($this.text() === "Read More"){
				$this.text("Hide");
			}else{
			  $this.text("Read More");
			}
		});
    
        $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});



$(document).ready(function () {
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="text"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
});

});
