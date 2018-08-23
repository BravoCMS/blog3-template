
jQuery(function ($) {
    
});

//Start of--------------------------------Votes & Views-------------------------
jQuery(function ($) {
    $('.js-views').each(function () {
        $.ajax({
            url: '/ajax/views/',
            data: {
                element_id: $(this).data('element-id'),
                element_type: $(this).data('element-type'),
                action: $(this).data('action'),
            },
            method: 'GET',
            dataType: 'jsonp',
            context: this,
            success: function (data) {
                if (data.views) {
                    $(this).html(t.text('js_total_views') + "\n<span class='views-count'>" + data.views + "</span>");
                    $(this).trigger('loaded');
                }
            }
        });
    });

    $('.js-votes').each(function () {
        $.ajax({
            url: '/ajax/votes/',
            data: {
                element_id: $(this).data('element-id'),
                element_type: $(this).data('element-type'),
                action: $(this).data('action'),
            },
            method: 'GET',
            dataType: 'jsonp',
            context: this,
            success: function (data) {
                if (data) {
                    var htmlCode = "<span class='votes-label'>" + t.text('js_total_votes') + "</span>\n<span class='votes-count'>" + data.votes + "</span>";

                    if (data.can_vote) {
                        htmlCode += '<div class="vote js-vote">' + t.text('js_total_votes_vote') + '</div>';
                    }

                    $(this).html(htmlCode);
                    $(this).trigger('loaded');
                }
            }
        });
    });

    $('.js-votes').on('click', '.js-vote', function () {
        var $votes = $(this).closest('.js-votes');

        $.ajax({
            url: '/ajax/votes/',
            data: {
                element_id: $votes.data('element-id'),
                element_type: $votes.data('element-type'),
                action: $votes.data('action'),
            },
            method: 'POST',
            dataType: 'jsonp',
            context: $votes,
            success: function (data) {
                if (data) {
                    var htmlCode = "<span class='votes-label'>" + t.text('js_total_votes') + "</span>\n<span class='votes-count'>" + data.votes + "</span>";

                    if (data.can_vote) {
                        htmlCode += '<div class="vote js-vote">' + t.text('js_total_votes_vote') + '</div>';
                    }

                    if (data.error === 'authorization_required') {
                        htmlCode += '<div class="vote">' + t.text('js_authorization_required') + '</div>';
                    }

                    $(this).html(htmlCode);
                    $(this).trigger('voted');
                }
            }
        });
    });
});
//End of---------------------------------Votes & Views--------------------------



jQuery(function ($) {
    var winWidth = $(window).width(),
            winHeight = $(window).height();

    $('body').prepend('');

    if ($('.articles_desc .last_news').length) {
        var articlesDescSectionRemove = $('.articles_desc .last_news').closest('.lb-container');
        $('.articles_desc .last_news').wrap('<div class="main-top-slider"></div>');
    }
    $('#center').before($('.main-top-slider'));
    if (articlesDescSectionRemove) {
        articlesDescSectionRemove.remove();
    }
    var mainContainerParentRemove = $('.main-container').closest('.lb-container');
    $('#center').prepend($('.main-container'));
    mainContainerParentRemove.remove();
    $('.main-top-slider').addClass('swiper-container');
    $('.main-top-slider .last_news').addClass('swiper-wrapper').after('<div class="swiper-pagination"></div><div class="swiper-button-next"><i class="fa fa-angle-right"></i></div><div class="swiper-button-prev"><i class="fa fa-angle-left"></i></div>');
    $('.main-top-slider .last_news li').addClass('swiper-slide');

    if (winWidth > 1400) {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        });
    } else {
        if (winWidth > 980) {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 3,
                paginationClickable: true,
                spaceBetween: 0,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });
        } else {
            if (winWidth > 600) {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 2,
                    paginationClickable: true,
                    spaceBetween: 0,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false
                });
            } else {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    paginationClickable: true,
                    spaceBetween: 0,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false
                });
            }
        }
    }
       
    $('.main-top-slider .last_news li .news_img_block a').each(function () {
        $(this).find($('.news_img')).css({
            background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
        $(this).append('<div class="featured-title" />');
        $(this).parent().find($('.featured-title')).append($(this).parents('.last_news li').find($('.title')));
        $(this).parent().find($('.featured-title')).append($(this).parents('.last_news li').find($('.date')));
    });

    $('#center').wrap('<div class="main-content-wrp" />');
    $('.main-content-wrp').append($('#left'));

    $('.main-article-list .last_news li').each(function () {
        $(this).find($('.news_img_block')).before($(this).find($('.title')));
        $(this).find($('a.morenews')).wrap('<p class="morenews-wrp" />');
    });

    if ($('.article_details.full').length) {
        $('#center').prepend($('.article_details.full'));
    }

    $('.slicknav_btn').on('click', function (e) {
        e.preventDefault();
        $('.slicknav_nav').fadeToggle();
    });

    // $("a.logo").clone().prependTo(".copyright");

    var str = $('.who_make a:first-child').text(),
            newStr = '';
    if (str.indexOf("totalcan") != -1) {
        newStr = str.substring(0, str.length - 16);
        $('.who_make a:first-child').addClass('totalcan').text(newStr);
    } else if (str.indexOf("ARTWEB") != -1) {
        newStr = str.substring(0, str.length - 11);
        $('.who_make a:first-child').addClass('artweb').text(newStr);
    }

    $('.language-active').on('click', function () {
        $('.block_language').slideToggle();
    });

    $('.article_details.full div.dlt ul.dlt li').each(function () {
        $(this).css({
            background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });

    if ($('#sidebar').length) {
        $('#left .content').append($('#sidebar'));
        $('body').addClass('show-left');
    } else if ($('.sidebar-block').length) {
        $('#left .content').append('<div class="section" id="sidebar" />');
        $('body').addClass('show-left');
        $('#sidebar').append($('.sidebar-block.widget-autor'));
        $('#sidebar').append($('.sidebar-block.widget-social'));
    }

    $('.main-page #center').prepend($('<div class="albums-wrp" />'));
    $('.albums-wrp').append($('.products_bay'));
    $('.products_bay').parent().prepend('<div class="albums-list" />');
    $('.albums-wrp .products_bay').each(function () {
        $(this).find($('.img_shadow a')).append($(this).find($('.products_bay_left > a h3')));
        $(this).find($('.img_shadow a')).appendTo($(this).parent().find($('.albums-list')));
        $(this).remove();
    });
    $('.albums-list a').each(function () {
        $(this).css({
            background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        });
    });

    if ($('.product_details_photo').length) {
        if ($('.album-description').length) {
            $('.product_details_photo').before($('.album-description'));
        }
        if ($('.album_description_additional').length) {
            $('.product_details_photo').after($('.album_description_additional'));
        }
        // $('.albums-wrp > h3').clone().appendTo($('.albums-wrp .header-image'));
        // $('.albums-wrp .header-image h3').html("<span>"+$('.albums-wrp .header-image h3').text()+"</span>");
        $('.albums-wrp > h3').appendTo($('.albums-wrp .header-image'));
        $('.albums-wrp .header-image h3').wrapInner("<span></span>");

        $('.block_conteiner').wrapAll('<div class="gallery-photos photoswipe-slider"></div>');
        $('.block_conteiner').each(function () {
            $(this).wrapInner('<div class="block_conteiner-remove"></div>');
            var fotoHrefOriginal = $(this).find('a').attr('href'),
                    fotoHref = $(this).find('img').attr('src'),
                    fofoWidth = $(this).find('a').attr('img-width') && $(this).find('a').attr('img-width') !== '0' ? $(this).find('a').attr('img-width') : $(this).find('img').width(),
                    fotoHeight = $(this).find('a').attr('img-height') && $(this).find('a').attr('img-height') !== '0' ? $(this).find('a').attr('img-height') : $(this).find('img').height(),
                    fofoSize = fofoWidth + 'x' + fotoHeight,
                    fotoDesc = $(this).find('p').length ? $(this).find('p').html() : '';
            $(this).append(
                    '<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">' +
                    '<a href="' + fotoHrefOriginal + '" itemprop="contentUrl" data-size="' + fofoSize + '">' +
                    '<img src="' + fotoHref + '" itemprop="thumbnail" alt="" class="img-responsive gallery-pic" />' +
                    '</a>' +
                    '<figcaption itemprop="caption description">' + fotoDesc + '</figcaption>' +
                    '</figure>'
                    );
            $(this).find('.block_conteiner-remove').remove();
            $(this).find('figure').unwrap();
        });
        $('.block_conteiner_gallery figure').addClass('block_conteiner');
        $('.block_conteiner_gallery').attr({
            'itemscope': '',
            'itemtype': 'http://schema.org/ImageGallery'
        });

        $('#gallery').prepend($('.gallery-photos'));
    }

    if ($('.contacts-wrp').length) {
        $('#center').prepend($('.contacts-wrp'));
    }

    if ($('.about-me-block').length) {
        $('.about-me-block .img-gallery li').wrapInner('<div class="about-me-wrp"><div class="header-contact-image"></div></div>');
        $('.about-me-block .img-gallery li .img-description').removeClass('img-description').addClass('hc-title').text($.trim($('.selected_filters_left').text())).wrapInner('<span />');
        if ($('.about-me-block').attr('style')) {
            var textColor = $('.about-me-block').attr('style').slice(18, -1);
            $('.hc-title').css({
                'color': textColor
            });
        }
        $('#center').prepend($('.about-me-wrp'));
        $('.about-me-block').closest('.lb-container').remove();
    }

    var srcImg = '';
    if ($('.header-contact-image').find($('img')).attr('src-original')) {
        srcImg = $('.header-contact-image').find($('img')).attr('src-original');
    } else {
        srcImg = $('.header-contact-image').find($('img')).attr('src');
    }
    $('.header-contact-image').css({
        background: 'url(' + srcImg + ') no-repeat',
        'background-size': 'cover',
        'background-position': 'center'
    });

    if ($('.addthis_toolbox').length) {
        $('.article_details.full > h1').after($('.addthis_toolbox'));
    }

    if ($('.social-widget-link').length) {
        $('#top-social .widget').prepend($('.social-widget-link'));
        $('.social-widget-link a').each(function () {
            $(this).append($('.top-social-icons .fa-' + $(this).attr('id')));
        });

        if ($('.la-block.social').length) {
            $('.la-block.social p').html($('#top-social .social-widget-link').clone());
        }
    }

    if ($('.header_menu_top > li').length) {
        if ($('.header_menu_top li').length > 4) {
            $('.header_menu_top').addClass('header_menu_top-big');
        }
        ;
        if ($('.header_menu_top > li').length > 8) {
            $('.header_menu_top').addClass('header_menu_top-very-big');
        }
        ;
    }

    if ($('.phone_t').length) {
        $('.phone_t a').addClass('phone-link').prepend('<i class="fa fa-phone""></i> ');
        $('.header-wrp .social-widget-link').prepend($('.phone_t a'))
    }

    $(document).on('focus', 'input[type=text], textarea', function () {
        if ($(this).val().length) {
            $(this).closest('.input_line').find('.label').css({'opacity': '1'});
        } else {
            $(this).closest('.input_line').find('.label').css({'opacity': '0'});
        }
        $(this).blur(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
        $(this).keydown(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
        $(this).keyup(function () {
            if ($(this).val().length) {
                $(this).closest('.input_line').find('.label').css({'opacity': '1'});
            } else {
                $(this).closest('.input_line').find('.label').css({'opacity': '0'});
            }
        });
    });

    $(window).on('load', function () {
        if ($('.article_details.full .img_list').length) {
            $('.article_details.full .img_list').shapeshift({
                autoHeight: true,
                enableDrag: false,
                enableCrossDrop: false,
                align: 'left',
                gutterX: 0,
                gutterY: 0,
                paddingX: 0,
                paddingY: 0,
                columns: 2,
                minColumns: 2
            });
        }
        $('.loading-mask').css({
            transition: "opacity 500ms",
            display: "none",
            opacity: "0"
        });
        if ($('.article_details.full .photoswipe-slider').length) {
            $('.article_details.full .photoswipe-slider').shapeshift({
                autoHeight: true,
                enableDrag: false,
                enableCrossDrop: false,
                align: 'left',
                gutterX: 0,
                gutterY: 0,
                paddingX: 0,
                paddingY: 0,
                columns: 2,
                minColumns: 2
            });
        }
        if ($('.gallery-photos').length) {
            $('.gallery-photos').shapeshift({
                autoHeight: true,
                enableDrag: false,
                enableCrossDrop: false,
                align: 'left',
                gutterX: 0,
                gutterY: 0,
                paddingX: 0,
                paddingY: 0,
                columns: 2,
                minColumns: 2
            });
        }

        $('.header-wrp').css({
            'transform': 'translateX(0px) translateY(0px)',
            'opacity': '1',
            'transition': 'transform 900ms cubic-bezier(0.075, 0.82, 0.165, 1)'
        });
        $('.header-wrp .menu-mobile').css({
            'transform': 'translateX(0px) translateY(0px)',
            'opacity': '1',
            'transition': 'transform 900ms cubic-bezier(0.075, 0.82, 0.165, 1)'
        });
        $('.header-wrp .slicknav_nav').css({
            'transform': 'translateX(0px) translateY(0px)',
            'opacity': '1',
            'transition': 'transform 900ms cubic-bezier(0.075, 0.82, 0.165, 1)'
        });
        setTimeout(function () {
            $('.header-wrp .logo-wrp').css({
                'opacity': '1',
                'transform': 'translateX(0px) translateY(0px)',
                'transition': 'opacity 500ms, transform 500ms'
            });
        }, 400);
        setTimeout(function () {
            $('.header-wrp .language-select-form').css({
                'opacity': '1',
                'transform': 'translateX(0px) translateY(0px)',
                'transition': 'opacity 500ms, transform 500ms'
            });
            $('.header-wrp #top-social').css({
                'opacity': '1',
                'transform': 'translateX(0px) translateY(0px)',
                'transition': 'opacity 500ms, transform 500ms'
            });
        }, 600);
    });

    if ($('.article_details.short').length) {
        $('.article_details.short').each(function () {
            $('.article_info > h3').addClass('art-title');
            $(this).find($('.article_img')).parent().before($(this).find($('.article_info > h3')));
            $(this).find($('.read_more_news')).wrap('<p class="morenews-wrp" />');
        });
    }

    if ($('.article_details.text .out-ext-info > *').length) {
        $('.article_details.text').addClass('have-content');
    }

    if ($('.parents-wrp').length) {
        $('.article_details.text').addClass('white-bg')
        $('.parents-wrp .last_news li .news_img_block a').each(function () {
            $(this).find($('.news_img')).css({
                background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            });
            $(this).append('<div class="featured-title" />');
            $(this).parent().find($('.featured-title')).append($(this).parents('.last_news li').find($('.title')));
            $(this).parent().find($('.featured-title')).append($(this).parents('.last_news li').find($('.desc')));
        });
    }

    if ($('.cat-family').length) {
        $('.cat-family .img-list').each(function () {
            $(this).find('li > a').css({
                background: 'url(' + $(this).find($('img')).attr('src') + ') no-repeat',
                'background-size': 'cover',
                'background-position': 'center'
            }).append($(this).find('.img-description'));
        });
    }

    if ($('.photolist .addthis_toolbox').length) {
        $('#gallery').before($('.photolist .addthis_toolbox'));
        $('body').addClass('has_addthis');
    }

    $(window).resize(function () {
        var winWidth = $(window).width(),
                winHeight = $(window).height();

        if ($('.article_details.full .img_list').length) {
            $('.article_details.full .img_list').shapeshift({
                autoHeight: true,
                enableDrag: false,
                enableCrossDrop: false,
                align: 'left',
                gutterX: 0,
                gutterY: 0,
                paddingX: 0,
                paddingY: 0,
                columns: 2,
                minColumns: 2
            });
        }
        if ($('.article_details.full .photoswipe-slider').length) {
            $('.article_details.full .photoswipe-slider').shapeshift({
                autoHeight: true,
                enableDrag: false,
                enableCrossDrop: false,
                align: 'left',
                gutterX: 0,
                gutterY: 0,
                paddingX: 0,
                paddingY: 0,
                columns: 2,
                minColumns: 2
            });
        }
        if (winWidth > 1400) {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 0,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false
            });
        } else {
            if (winWidth > 980) {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 0,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    loop: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false
                });
            } else {
                if (winWidth > 600) {
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 2,
                        paginationClickable: true,
                        spaceBetween: 0,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        loop: true,
                        autoplay: 5000,
                        autoplayDisableOnInteraction: false
                    });
                } else {
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.swiper-pagination',
                        slidesPerView: 1,
                        paginationClickable: true,
                        spaceBetween: 0,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        loop: true,
                        autoplay: 5000,
                        autoplayDisableOnInteraction: false
                    });
                }
            }
        }
    });

    $(window).scroll(function () {
        var scrollVal = $(window).scrollTop();
    });
    
    $(window).load(function () {
        $('.loading-mask').css({
            transition: "opacity 500ms",
            display: "none",
            opacity: "0"
        });
    });

    setTimeout(function () {
        $('.loading-mask').css({
            transition: "opacity 500ms",
            display: "none",
            opacity: "0"
        });
    }, 2000);
});


jQuery(document).ready(function ($) {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    initPhotoSwipeFromDOM('.photoswipe-slider');

});