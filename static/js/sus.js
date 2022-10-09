    var setContactSelect = function(node, classname) {
        node.siblings('.contact__entry').each(function(i) {
            var entry = $(this);
            if (entry.hasClass(classname)) {
                entry.css('display', 'inline-block');
            } else {
                entry.css('display', 'none');
            }
            $(window).scroll();
        });
    }

    js.initJst = function(id) {
        $(id).find('.jst').each(function(i) {
            var node = $(this);
            var type = node.attr('data-jst-type');
            //
            //console.info('jst ' + [i,type])
            switch (type) {
                case 'lazy':
                    setLazy(node);
                    break;

                case 'svg-icon':
                    setSvgIcon(node);
                    break;

                case 'accordion':
                    setAccordion(node);
                    break;

                case 'carousel':
                    setCarousel(node);
                    break;

                case 'video':
                    setVideo(node, i);
                    break;

                case 'tooltip':
                    setSvgIcon(node);
                    setTooltip(node);
                    break;

                case 'search':
                    setSvgIcon(node);
                    setSvgIcon(node, 'icon-close');
                    setSearch(node);
                    break;

                case 'menu-mobile':
                    setSvgIcon(node);
                    setSvgIcon(node, 'icon-close');
                    setMenuMobile(node);
                    break;

                case 'detail':
                    setDetail(node);
                    break;

                case 'nice-select':
                    setNiceSelect(node);
                    break;

                case 'init-fancybox':
                    initFancybox(node);
                    break;

                case 'inpagemenu':
                    setInpagemenu(node);
                    break;

                case 'stage':
                    setStage(node);
                    break;

                case 'special-fp':
                    setFullpage(node);
                    break;

                case 'init-contact-select':
                    initContactSelect(node);
                    break;

                case 'countup':
                    setCountup(node, i);
                    break;

                case 'toggle':
                    setToggle(node);
                    break;

                case 'tabs':
                    setTabs(node);
                    break;

                case 'tabcarousel':
                    setTabcarousel(node);
                    break;

                case 'locations':
                    setLocations(node);
                    break;

                case 'modal':
                    setModal(node);
                    setSvgIcon(node);
                    break;

                case 'modal-btn':
                    setModal(node);
                    break;

                case 'toggle-tablerow':
                    setToggleTablerow(node);
                    break;

                case 'collapsible':
                    setCollapsible(node);
                    break;

                case 'jobsearch':
                    setJobsearch(node);
                    break;

                case 'open-special':
                    setOpenSpecial(node);
                    break;

                case 'footer-share':
                    setFooterShare(node);
                    break;

                case 'disclaimer':
                    setDisclaimer(node);
                    break;

                case 'iconlist':
                    setIconlist(node);
                    break;

                default:
                    if (node.hasClass('icon-external')) {
                        node.removeClass('svg-icon');
                        var span = $('<span class="svg-icon svg-inline-text after"></span').appendTo(node);
                        setSvgIcon(span, 'icon-external');
                    }
                    break;
            }
            //
            node.removeClass('jst').removeAttr('data-jst-type');
        });
    }


   var setModal = function(a) {
        a.on('click', function(e) {
            stopEvent(e);
            var pageUrl = $(this).attr('href');
            resetNavAndModes();
            setPreventScroll(true);
            if (modalLayer == null) {
                modalLayer = $('<div class="modal__layer"></div>').appendTo(pageBody);
                modalContent = $('<div class="modal__content"></div>').appendTo(modalLayer);
                modalClose = $('<a href="#" class="btn-close"><span class="jst svg-icon before" data-jst-type="svg-icon" data-svg-symbol="icon-close-circle"></span></a>').appendTo(modalLayer);
                modalClose.on('click', function(e) {
                    stopEvent(e);
                    resetNavAndModes();
                    resetModal();
                    setPreventScroll(false);
                });
            }
            if (pageUrl == '#') {
                var pageContent = '<div class="container"><div class="row"><div class="col-24 col-lg-20 offset-lg-2 col-xl-16 offset-xl-4 col-xxl-14 offset-xxl-5"><main><article>' + $(this).parent().parent().children('.card__content-modal').html() + '</article></main></div></div></div>';
                initModal(pageContent);
            } else {
                loadModal(pageUrl);
            }
        });
    }

    var setCollapsible = function(node) {
        var a = $('<a href="#" class="d-block svg-icon before collapsible__btn bold"><span class="more">' + node.attr('data-label-more') + '</span><span class="less">' + node.attr('data-label-less') + '</span></a>').insertAfter(node);
        setSvgIcon(a, 'icon-accordion-minus');
        setSvgIcon(a, 'icon-accordion-plus');
        a.on('click', function(e) {
            stopEvent(e);
            a.toggleClass('open');
            if (a.hasClass('open')) {
                a.prev().addClass('open');
            } else {
                a.prev().removeClass('open');
            }
        });
    }


    var setSubnavLayer = function(arr, lev, ismobile, num) {
        pageHeaderSubnavHeading.empty().append('<p class="h2">' + arr.Label + '</p>')
        pageHeaderSubnavContent.empty()
            .append('<p class="sm">' + arr.Copy + '</p>')
            .append('<a href="' + arr.Link + '" class="iconlink svg-icon ol-off before icon-internal bold" tabindex="-1"><svg class="svg-icon-internal" aria-hidden="true" viewBox="0 0 16 16">' + svgP["icon-internal"] + '</svg>' + pageHeaderNavMain.attr('data-label-overview') + '</a>');
        var arrRight = arr.slice(0);
        var arrLeft = arrRight.splice(0, parseInt(arr.breakAfterNum));
        fillColumn(pageHeaderSubnavNavwrapLeft, arrLeft);
        fillColumn(pageHeaderSubnavNavwrapRight, arrRight);
        pageHeaderSubnav.on('click', function(e) {
            if ($(e.target).attr('href') != undefined) {
                setETracker($(e.target).text(), 'Click-Subnav', 'click', '');
            }
        });
        //
        function fillColumn(node, arr) {
            node.empty();
            var nav = $('<nav></nav>').appendTo(node);
            var ul = $('<ul class="medium"></ul>').appendTo(nav);
            for (var i = 0; i < arr.length; i++) {
                (
                    function(i) {
                        var li = $('<li><a href="' + arr[i].Link + '">' + arr[i].Label + '</a></li>').appendTo(ul);
                        if (arr[i].Link.indexOf('#') > -1) {
                            li.children('a').on('click', function(e) {
                                var parts = $(this).attr('href').split('#');
                                if (parts[0] == document.location.href || parts[0] == "" || document.location.href == arr[i].Link) {
                                    stopEvent(e);
                                    resetNavAndModes();
                                    var tgt = $('#' + parts[1]);
                                    var y = tgt.offset().top - 40;
                                    $('html, body').scrollTo(y, 400);
                                }
                            });
                        }
                        //
                        if (arr[i].hasSub) {
                            li.addClass('hassub');
                            var ulSub = $('<ul class="regular"></ul>').appendTo(li);
                            for (var j = 0; j < arr[i].length; j++) {
                                var liSub = $('<li><a href="' + arr[i][j].Link + '">' + arr[i][j].Label + '</a></li>').appendTo(ulSub);
                            }
                        }
                    }
                )
                (i);
            }
        }
    }