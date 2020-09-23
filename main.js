$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".top").css("background", "white");
        } else {
            $(".top").css("background", "#rgb(22, 50, 91)");
        }
    })


    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 210) {
            $('.nav-link').css('color', '#rgb(22, 50, 91)');
        } else {
            $('.nav-link').css('color', 'white');
        }
    });
});
window.onscroll = function() { myFunction() };

var navbar = document.getElementById("top");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}