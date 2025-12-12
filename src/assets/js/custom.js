$('ul#nav-list li').each(function(){
    var fg = $(this).find('.nav-link').attr('href');
    console.log(fg);

    if(window.location.href.indexOf(fg)>-1){
        var gh=$(this).find('.nav-link').addClass('active');
        $('.nav-link').not(gh).removeClass('active')
    }
});
//dropdown active
$('ul#nav-list li.dropdown .dropdown-menu a.dropdown-item').each(function(){
    var fg = $(this).attr('href');
    console.log(fg);

    if(window.location.href.indexOf(fg)>-1){
        var gh=$(this).addClass('active');
        $('a.dropdown-item').not(gh).removeClass('active');
        // var gh=$(this).addClass('active');

        if($('a.dropdown-item').hasClass('active')){
            var gh=$(this).parent().parent().find('.nav-link').addClass('active');
            $('li.dropdown>a').not(gh).removeClass('active')
        }
    }
});
