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

    $("#form_message").keyup(function() {
        contact();
    });
});

var contact = function() {
    var name = $("#form_name").val();
    var last = $("#form_lastname").val();
    var phone = $("#form_phone").val();
    var msg = $("#form_message").val();
    var email = $("#form_email").val();
    msg = encodeURI(msg + "\n\n\n" + name + " " + last + "\n" + email + "\n" + phone);

    $("#send").attr("onclick", "location.href='mailto:omarmalave21@gmail.com?subject=Hi!" + "&body=" + msg + "'");

};


