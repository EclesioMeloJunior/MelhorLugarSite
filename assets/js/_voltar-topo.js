$(function(){
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 150) {
            $('.voltar-topo').addClass('show');
        } else {
            $('.voltar-topo').removeClass('show');
        }
    });
    $('.voltar-topo').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
}


function scrollToLink(link) {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('#' + link);
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
}