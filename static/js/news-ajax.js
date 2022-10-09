$(document).ready(function() {
    //$('').on('click', '', function(e) {

    $('.news').on('click', '.news-item-container .load-more-wrapper', function(e) {
        e.preventDefault();

        var button = $(this);
        button.addClass('loading');
        $.ajax({
            async: 'true',
            url: button.find('a').attr('href'),
            type: 'POST',
            dataType: 'html',
            success: function(data) {
                button.remove();
                $(data).find(".news-item-container").insertAfter($('.news-item-container').find('.listitem:last')).hide().fadeIn("fast");
            },
            error: function(error) {
                button.removeClass('loading');
            }
        });
    });


    //search
    var pathname = window.location.href;
    // console.log(pathname);
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    var mytext = vars["tx_kesearch_pi1%5Bsword%5D"];
    $(".given-word-search").append(mytext);

    //news 3 latest
    $(".latest-3-news .listitem .news-header-identify").each(function() {
        var href = $(this).parent().find('.more').attr('href');
        $(this).wrap("<a href='" + href + "'></a>")
    });

    //cookies

    $("#tx_cookies_accept").click(function() {
        $('#tx_cookies').css("display", 'none');
        $('body').removeClass("cookieprompt");
    });

    var discTop;
    var discTopScroll = '70px';
    if ($(window).width() > 1519) {
        var discTop = '125px';
    } else if ($(window).width() < 1519 && $(window).width() > 992) {
        var discTop = '115px';
        var discTopScroll = '60px';
    } else {
        var discTop = '65px';
        var discTopScroll = '60px';
    }

    $(window).scroll(function() {
        var $this = $(this);
        if ($this.scrollTop() > 20) {
            $('#tx_cookies').css("top", discTopScroll);
        } else {
            $('#tx_cookies').css("top", discTop);
        }
    });



});