window.addEventListener('scroll', function() {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = window.scrollY;  // Obtener el valor de scroll vertical
    
    document.querySelectorAll('.y1').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.1) + 'px, 0)';
    });
    document.querySelectorAll('.y2').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.10) + 'px, 0)';
    });
    document.querySelectorAll('.y3').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.05) + 'px, 0)';
    });
    document.querySelectorAll('.y4').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.03) + 'px, 0)';
    });
    document.querySelectorAll('.y5').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.04) + 'px, 0)';
    });
    document.querySelectorAll('.y6').forEach(function(element) {
        element.style.transform = 'translate3d(0,' + (scrolled * -0.05) + 'px, 0)';
    });
}