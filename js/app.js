 $(document).ready(function() {
     
    // INTEGRARE SLIDESHOW
    $("#slideshow").owlCarousel({ 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay: 3000,
        stopOnHover: true,
        navigation: false,
        singleItem:true,
        pagination: false 
    });

    
    var owl = $("#slideshow"); 

    $(".pag-next").click(function(){
        owl.trigger('owl.next');
    })
    $(".pag-prev").click(function(){
        owl.trigger('owl.prev');
    })    

});