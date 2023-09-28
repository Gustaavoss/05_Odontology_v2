$('nav.desktop a').hover(function(){
    $('nav.desktop li').removeClass('selected');
    $(this).parent().addClass('selected');

})
$('nav.mobile h3').click(function(){
    $('ul.nav-desktop').slideToggle();
})