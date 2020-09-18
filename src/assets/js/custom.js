$(document).ready(function(){
    $('#mobile-collapse').click(function(){
        $('.pcoded-navbar.menu-light').toggleClass('navbar-collapsed');
        $('#mobile-collapse').toggleClass('on');
    });

    $('.nav-link').click(function(){
        var parent = $(this).parent();
        $(parent).toggleClass('pcoded-trigger');
        $(parent).find('ul').toggleClass('show-subMenu');
        if($(parent).siblings().hasClass('pcoded-trigger')){
            $(parent).siblings().removeClass('pcoded-trigger');
        }
        if($(parent).siblings().find('ul').hasClass('show-subMenu')){
            $(parent).siblings().find('ul').removeClass('show-subMenu');
        }

    });
});