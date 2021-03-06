/*
   Copyright onTime Group 2014 - Opening Opportunities Team
   Presentation website created for onTime App WP7 
   More details and contact on social pages.
   
    Authors:
    
    Developer: Alex Imbrea, Roberto Tamas
    Design: Roberto Tamas
    
    */

jQuery(document).ready(function ($) {

    // Scroll down function
    $("#button_down_1").click(function () {
        $('html, body').animate({
            scrollTop: $("#slide2").offset().top
        }, 1500);        
    });


   
    // fancybox-media
   	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});

    /*
    //intialise bjqs carousel
  $('.developers').bjqs({
    animtype      : 'slide',
    responsive    : true,
    randomstart   : true,
    width         : Math.round(document.documentElement.clientWidth * 1),
    height        : Math.round(document.documentElement.clientHeight * 0.63),
    nexttext      : '<img src="../images/team/icons/navigators/right-page.png" />',
    prevtext      : '<img src="../images/team/icons/navigators/left-page.png" />'
  });
  

   $(".content").hover(function(){
    $(this).addClass('contentHover');
  }, function(){
    $(this).removeClass('contentHover');
 });

    //initialise Stellar.js
    $(window).stellar({
        responsive: true,
        hideDistantElements: false
    });

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button2');
    mywindow = $(window);
    htmlbody = $('html,body');

    $('#onTimeLogo').waypoint(function (event, direction) {

        if (direction === 'down')
            $('.bar').addClass('bar-color');
        else
            $('.bar').removeClass('bar-color');
    }, { offset: -10 });

    $('#meetTeam').waypoint(function (event, direction) {

        if (direction === 'down')
        { $('.onTimeLogo1').addClass('onTimeLogo2'); }
        else
        { $('.onTimeLogo1').removeClass('onTimeLogo2'); }
    }, { offset: -1 });
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        if (dataslide >= 2) {

            { $('.twBtn').addClass('twBtn-a'); }
            { $('.gpBtn').addClass('gpBtn-a'); }
            { $('.fbBtn').addClass('fbBtn-a'); }
        }
        else {


            { $('.twBtn').removeClass('twBtn-a'); }
            { $('.gpBtn').removeClass('gpBtn-a'); }
            { $('.fbBtn').removeClass('fbBtn-a'); }
        }
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');


        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');

        }

    });



    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class 
    //from navigation link slide 2 and adds it to navigation link slide 1. 
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });


    $("body").queryLoader2({
        //backgroundImage: "../img/ui/load.png",
        barColor: "#fff",
        backgroundColor: "#000000",
        percentage: false,
        barHeight: 2,
        completeAnimation: "ease"
    });
    */

});
