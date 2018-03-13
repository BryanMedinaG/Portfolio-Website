$(window).scroll(function() {

    if ($(this).scrollTop()>0)
    {
        $('.tbutton').fadeOut();
    }
    else
    {
        $('.tbutton').fadeIn();
    }
});