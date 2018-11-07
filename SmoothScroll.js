// Select all links with hashes
$(document).ready(function () {

    window.onload = toggleNavClass();

    $(function () {
        $(document).scroll(function () {
            toggleNavClass();
        });
    });

    function toggleNavClass() {
        var $nav = $(".navbar");

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }


    $('a[href*="#"]')
        // Remove dead links
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // check if link is on page
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation 
                        //changes focus
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

//colors the navbar on scroll


