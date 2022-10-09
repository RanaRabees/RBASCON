$(function() {
    $("#tx_cookies_close").click(function() {
        $(this).closest("#tx_cookies").find("#tx_cookies_showPermanent").show();
        $(this).closest("#tx_cookies_inner").hide();
    });
    $("#tx_cookies_showPermanent").click(function() {
        $(this).hide();
        $(this).closest("#tx_cookies").find("#tx_cookies_inner").show();
    });
    if ($("#tx_cookies_inner").attr("data-hide") == 1) {
        $("#tx_cookies_inner").hide();
    }
    if ($("#tx_cookies_showPermanent").attr("data-show") == 1) {
        $("#tx_cookies_showPermanent").show();
    }

    $("#tx_cookies_accept").submit(function(e) {
        e.preventDefault();
        // Set cookie
        var d = new Date();
        d.setTime(d.getTime() + ($(this).attr("data-expire") * 24 * 60 * 60 * 1000));
        var expires = 'expires=' + d.toUTCString();
        document.cookie = 'tx_cookies_accepted=1;' + expires + ';path=/;samesite=strict';
        // Close cookie hint
        $(this).closest("#tx_cookies").find("#tx_cookies_close").click();
    });
});