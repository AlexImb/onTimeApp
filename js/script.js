$(document).ready(function () {

    /***************** Waypoints ******************/

   

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInUp').removeClass('fadeOut');
    }, {
        offset: '80%'
    });    

});