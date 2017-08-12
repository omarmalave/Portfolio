$(document).ready(function(){

    $('body').scrollspy({ target: '#navbarNav' });//scrollspy

    //Smooth scrolling
    $("#navbarNav a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            window.location.hash = hash;
            });
        }

    });

    //Prevent default behavior on anchor with "href='#'"
        $(".preventDefault").click(function(event){
            event.preventDefault();
        });

	//Navbar scrolling effect
	$(window).on('scroll', function () {
        if ($(window).scrollTop() >= 50) {
            $('.navbar').removeClass('navbar-inverse');
            $('.navbar').addClass('navbar-light');
        } else {
            $('.navbar').removeClass('navbar-light');
            $('.navbar').addClass('navbar-inverse');
        }
    });

    $("#send").click(function() {
        $("#cog").css("visibility", "visible");
    });
   
});

