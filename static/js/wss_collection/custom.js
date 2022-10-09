$(document).on("click", ".collectionAjaxData .collectiondataAjax", function() {
    var url = $(this).attr('href');
    var id = $(this).parent().data('id');
    var end = $(".collectionajaxData-" + id).data('end');
    var sorting = $(".collectionajaxData-" + id).data('sorting');
    var loop = $(".collectionajaxData-" + id).data('loop');
    var cartenabled = $(".collectionajaxData-" + id).data('cartenabled');
    $("span").remove(".collectionajaxData-" + id);
    $.ajax({
        type: "POST",
        url: url,
        data: {
            "end": end,
            "sorting": sorting,
            "loop": loop,
            "cartenabled": cartenabled,
        },
        success: function(data) {
            $(".tx-wss-collection-" + id + " .col-24:last").after(data).show().fadeIn("slow");
            var loadmorevisible = $(".collectionajaxData-" + id).data('loadmorevisible');
            if (loadmorevisible != 1) {
                $("div").remove("#collection-" + id);
            }

            // The cards may have a shoppingCart-icon. The cart function is only available after accepting the cc-cart cookie.
            // In non-ajax mode, there is a JS, that checks the cookie consent and enables the cart-icon on pageload. This script is not invoked after fetching the content via ajax.
            // So we need a cookie-check here, too.
            // Todo: The snippet here is a simple copy of the function in cookie_consent.js. Maybe we find a more generic solution?
            if ('true' === Cookies.get('cc_cart')) {
                var cartElements = document.querySelectorAll('[data-consent-required="cc_cart"]');
                for (var i = 0; i < cartElements.length; ++i) {
                    cartElements[i].style.display = 'block';
                }
            }
        },
    });
    return false;
});

$(document).on("click", ".addToCartAjax", function() {
    var imsid = $(this).data('imsid');
    var title = $(this).data('title');
    var totalcart = parseInt($('.carttotalitems').data('total')) + 1;
    $('.carttotalitems').data("total", totalcart);
    $('.carttotalitems').html(totalcart);
    if (totalcart > 0) {
        $(".cartformclick").removeAttr("onclick");
    }
    if (typeof Cookies.get('imsid-' + imsid) === 'undefined') {
        Cookies.set("imsid-" + imsid, 1, {
            path: '/',
            expires: 365
        });
        Cookies.set("title-" + imsid, title, {
            path: '/',
            expires: 365
        });
        Cookies.set("cartimsid-" + imsid, imsid, {
            path: '/',
            expires: 365
        });
    } else {
        var total = parseInt(Cookies.get('imsid-' + imsid)) + 1;
        Cookies.set("imsid-" + imsid, total, {
            path: '/',
            expires: 365
        });
    }
    return false;
});

$(document).on("click", ".deletecartItem", function() {
    var imsid = $(this).data('imsid');
    Cookies.remove('imsid-' + imsid, {
        path: '/'
    });
    Cookies.remove('title-' + imsid, {
        path: '/'
    });
    Cookies.remove('cartimsid-' + imsid, {
        path: '/'
    });
    $(this).parent().parent().remove();
    return false;
});

$(document).on("change", ".updateCartitem", function() {
    var imsid = $(this).parent().data('imsid');
    var value = $(this).val();
    Cookies.set("imsid-" + imsid, value, {
        path: '/',
        expires: 365
    });
    return false;
});

$(function() {
    onFocusValidation();
});

// Custom validation for onfocus
function onFocusValidation() {
    var privacypolicy = document.getElementsByName('tx_wsscollection_cartform[newCartform][privacypolicy]').length;

    $('.data-required').each(function(index) {
        $(this).focusout(function() {
            if (!$(this).val()) {
                $(this).next().show();
                $(this).addClass('error');
                var flag = 0;
            } else {
                $(this).removeClass('error');
                $(this).next().hide();
            }
        });
    });

    $('#email').focusout(function() {
        if (!$('#email').val()) {
            $(this).next().show();
            $('#email').addClass('error');
            var flag = 0;
        } else {
            if (validateEmail($('#email').val()) == false) {
                $(this).next().hide();
                $('#email').addClass('error');
                $('.error.emailaddress').show();
                var flag = 0;
            } else {
                $(this).next().hide();
                $('#email').removeClass('error');
                $('.error.emailaddress').hide();
            }
        }
    });

    $('#country').focusout(function() {
        if ($('#country').val() == 0) {
            $('.error.country').show();
            $('#country').addClass('error');
            var flag = 0;
        } else {
            $('#country').removeClass('error');
            $('.error.country').hide();
        }
    });

    $('#privacypolicy').focusout(function() {
        if (privacypolicy) {
            if (!$('#privacypolicy').prop("checked")) {
                $('.error.privacypolicy').show();
                var flag = 0;
                $('#privacypolicy').addClass('error');
            } else {
                $('#privacypolicy').removeClass('error');
                $('.error.privacypolicy').hide();
            }
        }
    });
}

$(document).on("click", ".cartdatasubmit", function() {
    var flag = 1;
    var privacypolicy = document.getElementsByName('tx_wsscollection_cartform[newCartform][privacypolicy]').length;
    if (!$('#lastname').val()) {
        $('.error.lastname').show();
        $('#lastname').addClass('error');
        var flag = 0;
    } else {
        $('#lastname').removeClass('error');
        $('.error.lastname').hide();
    }

    if (!$('#street').val()) {
        $('.error.street').show();
        $('#street').addClass('error');
        var flag = 0;
    } else {
        $('#street').removeClass('error');
        $('.error.street').hide();
    }

    if (!$('#housenumber').val()) {
        $('.error.housenumber').show();
        $('#housenumber').addClass('error');
        var flag = 0;
    } else {
        $('#housenumber').removeClass('error');
        $('.error.housenumber').hide();
    }

    if (!$('#postcode').val()) {
        $('.error.postcode').show();
        $('#postcode').addClass('error');
        var flag = 0;
    } else {
        $('#postcode').removeClass('error');
        $('.error.postcode').hide();
    }

    if (!$('#place').val()) {
        $('.error.place').show();
        $('#place').addClass('error');
        var flag = 0;
    } else {
        $('#place').removeClass('error');
        $('.error.place').hide();
    }

    if (!$('#email').val()) {
        $('.error.email').next().show();
        $('#email').addClass('error');
        var flag = 0;
    } else {
        if (validateEmail($('#email').val()) == false) {
            $('.error.email').next().hide();
            $('#email').addClass('error');
            $('.error.emailaddress').show();
            var flag = 0;
        } else {
            $('.error.email').next().hide();
            $('#email').removeClass('error');
            $('.error.emailaddress').hide();
        }
    }

    if ($('#country').val() == 0) {
        $('.error.country').show();
        $('#country').addClass('error');
        var flag = 0;
    } else {
        $('#country').removeClass('error');
        $('.error.country').hide();
    }

    if (privacypolicy) {
        if (!$('#privacypolicy').prop("checked")) {
            $('.error.privacypolicy').show();
            $('#privacypolicy').addClass('error');
            var flag = 0;
        } else {
            $('#privacypolicy').removeClass('error');
            $('.error.privacypolicy').hide();
        }
    }

    console.log(flag);
    if (flag == 1) {
        return true;
    } else {
        return false;
    }
});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}