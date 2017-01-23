/*
   Copyright onTime Group 2014 - Opening Opportunities Team
   Presentation website created for onTime App WP7 
   More details and contact on social pages.
   
    Authors:
    
    Developer: Alex Imbrea
    Design: Roberto Tamas 
    
    */

jQuery(document).ready(function ($) {
    $("#box1").click(function () {
        $('html, body').animate({
            scrollTop: $(".idea").offset().top
        }, 1500);
        //});
    });
    $("#box2").click(function () {
        $('html, body').animate({
            scrollTop: $(".vision").offset().top
        }, 1500);
        //});
    });
    $("#box3").click(function () {
        $('html, body').animate({
            scrollTop: $(".design").offset().top
        }, 1500);
        //});
    });
    $("#box4").click(function () {
        $('html, body').animate({
            scrollTop: $(".research").offset().top
        }, 1500);
        //});
    });
    $("#box5").click(function () {
        $('html, body').animate({
            scrollTop: $(".programming").offset().top
        }, 1500);
        //});
    });
    $("#box6").click(function () {
        $('html, body').animate({
            scrollTop: $(".marketing").offset().top
        }, 1500);
        //});
    });


    /*
    //hover jQuery facut la 3 noapte. creierul meu nu a gasit un selector potrivit la ora aia
   $("#box1").hover(function(){
    $("#box1 .content").addClass('contentHover'),
    $("#box1 .extra").addClass('extraHover');
  }, function(){
    $("#box1 .content").removeClass('contentHover'),
    $("#box1 .extra").removeClass('extraHover');
 });

    $("#box2").hover(function(){
    $("#box2 .content").addClass('contentHover'),
    $("#box2 .extra").addClass('extraHover');
  }, function(){
    $("#box2 .content").removeClass('contentHover'),
    $("#box2 .extra").removeClass('extraHover');
 });

    $("#box3").hover(function(){
    $("#box3 .content").addClass('contentHover'),
    $("#box3 .extra").addClass('extraHover');
  }, function(){
    $("#box3 .content").removeClass('contentHover'),
    $("#box3 .extra").removeClass('extraHover');
 });

    $("#box4").hover(function(){
    $("#box4 .content").addClass('contentHover'),
    $("#box4 .extra").addClass('extraHover');
  }, function(){
    $("#box4 .content").removeClass('contentHover'),
    $("#box4 .extra").removeClass('extraHover');
 });


    $("#box5").hover(function(){
    $("#box5 .content").addClass('contentHover'),
    $("#box5 .extra").addClass('extraHover');
  }, function(){
    $("#box5 .content").removeClass('contentHover'),
    $("#box5 .extra").removeClass('extraHover');
 });

    $("#box6").hover(function(){
    $("#box6 .content").addClass('contentHover'),
    $("#box6 .extra").addClass('extraHover');
  }, function(){
    $("#box6 .content").removeClass('contentHover'),
    $("#box6 .extra").removeClass('extraHover');
 });*/

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

    $('#box6').waypoint(function (event, direction) {

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

});
