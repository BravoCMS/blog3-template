
<{extends 'layout/html.tpl'}>

<{block name=title}>

<{/block}>

<{block name=favicon}>
    <link rel="shortcut icon" href="<{file 'assets/favicon.ico'}>" />
<{/block}>

<{block name="head"}>
    <{custom_code "head_open"}>

    <{strip}>
        <script type="text/javascript">
            var t = {
                _codes: <{t cat="js" json}>,
                _get_suffix: function (count) {
                    if (count == 1) {
                        return "-1";
                    } else if (count % 10 == 1 && count > 20 && count % 100 != 11) {
                        return "-mod1n11";
                    } else if (count % 10 > 1 && count % 10 < 5 && count % 100 > 20 || count % 100 < 5 && count % 100 > 1) {
                        return "-mod234n1x";
                    } else {
                        return "-many";
                    }
                },
                text: function (key, count) {
                    var suffix = typeof count === "undefined" ? "" : this._get_suffix(count);
                    var t = "";

                    if (suffix === "" || typeof (t = this._codes[key + suffix]) === "undefined") {
                        if (typeof (t = this._codes[key]) === "undefined") {
                            t = "[js_text." + key + suffix + "]";
                        }
                    }

                    return t;
                }
            };

            var URL = "<{$site.url_part|escape}>";
        </script>
    <{/strip}>

    <link href="<{file 'assets/plugins/bootstrap4/css/bootstrap.min.css'}>" rel="stylesheet" type="text/css" />
    <!-- <link href="<{file 'assets/css/style.css'}>" rel="stylesheet" type="text/css" /> -->
    
    <link href="<{file 'assets/css/photoswipe-default-skin.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/css/photoswipe-style.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/css/photoswipe.css'}>" rel="stylesheet" type="text/css" />
    <link href='http://fonts.googleapis.com/css?family=Bad+Script|Raleway:400,500,600,700,300|Lora:400' rel='stylesheet' type='text/css'/>
    <link href='https://fonts.googleapis.com/css?family=Montserrat%3A400&subset=latin&ver=1437735376' id='redux-google-fonts-memory-css' media='all' rel='stylesheet' type='text/css'/>
    <link rel='stylesheet' id='googlefonts-css-css'  href='//fonts.googleapis.com/css?family=Lato%3A100%2C300%2C400%2C700&ver=4.3.1' type='text/css' media='all' />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link href="<{file 'assets/plugins/swiper/swiper.min.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/plugins/article2/custom-article.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/css/global_style.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/css/blog3.css'}>" rel="stylesheet" type="text/css" />
    <link href="<{file 'assets/plugins/article2/bootstrap.grid.css'}>" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="<{file 'assets/plugins/jquery-3.2.1.min.js'}>"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/article2/custom-article.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/jquery.link-submit.js'}>"></script>

    <script type="text/javascript" src="<{file 'assets/js/photoswipe-index.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/js/photoswipe-ui-default.min.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/js/photoswipe.min.js'}>"></script>
    
    <script type="text/javascript" src="<{file 'assets/js/jquery.shapeshift.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/plugins/swiper/swiper.min.js'}>"></script>
    <script type="text/javascript" src="<{file 'assets/js/blog3.js'}>"></script>
       
    <{if $is_web_admin}>
        <script type="text/javascript" src="<{file 'assets/js/web-admin.js'}>"></script>
    <{/if}>
    <{if $template.template_customization.is_custom_scheme}> 
        <style>
            :root {
                --first-color: <{$template.template_customization.first_color}>;
                --second-color:  <{$template.template_customization.second_color}>;
                --first-alpha-color: <{$template.template_customization.first_color}>cc;
                --second-alpha-color: <{$template.template_customization.second_color}>cc;
            }
        </style>
    <{else}>
        <{if $template.scheme == 'silver-gold'}>
            <style>
                :root {
                    --first-color: #444444;
                    --second-color:  #cea525;
                    --first-alpha-color: #444444cc;
                    --second-alpha-color: #cea525cc;
                }
            </style>
        <{elseif $template.scheme == 'gold-silver'}>
            <style>
                :root {
                    --first-color: #996515;
                    --second-color:  #444444;
                    --first-alpha-color: #996515cc;
                    --second-alpha-color: #444444cc;
                }
            </style>
        <{elseif $template.scheme == 'blue-red'}>
            <style>
                :root {
                    --first-color: #2c3e50;
                    --second-color:  #c0392b;
                    --first-alpha-color: #2c3e50cc;
                    --second-alpha-color: #c0392bcc;
                }
            </style>
        <{else}>
        <style>
            :root {
                --first-color: #444444;
                --second-color:  #cea525;
                --first-alpha-color: #444444cc;
                --second-alpha-color: #cea525cc;
            }
        </style>
        <{/if}>
    <{/if}>

    <link href="<{file 'assets/css/scheme.css'}>" rel="stylesheet" type="text/css" />
    <{custom_code "head_close"}>
<{/block}>

<{block name="body"}>
    <{custom_code "body_open"}>
    
    <!-- <div class="loading-mask">
        <div class="loading"></div>
    </div> -->

    <{get_contacts "layout_contacts"}>
    
    <div>
        <{custom_code "site_header"}>
        <div class="header">
            <div class="header-fixed">
                <div class="header-wrp">
                    <div class="logo-wrp">
                        <a class="logo" href="<{$site.home_url}>">
                            <{if $site.logo.type === 'image'}>
                                <img src="<{$site.logo.image}>" />
                            <{else}>
                                <div class="text-logo">
                                    <{$site.logo.text|htmlspecialchars}>
                                </div>
                                <style>
                                    .text-logo {
                                        <{if $site.logo.text_color}>color:<{$site.logo.text_color}> !important;<{/if}>
                                        <{if $site.logo.text_size}>font-size:<{$site.logo.text_size}>px;<{/if}>
                                        <{if $site.logo.text_font}>font-family:'<{$site.logo.text_font|escape}>';<{/if}>
                                    }
                                </style>
                            <{/if}>
                        </a>
                    </div>


                    
                    <div class="header-setting">
                        <div class="menu-mobile">
                            <div class="slicknav_menu">
                                <a class="slicknav_btn slicknav_collapsed">
                                    <span class="slicknav_menutxt"></span>
                                    <span class="slicknav_icon slicknav_no-text">
                                        <span class="slicknav_icon-bar"></span>
                                        <span class="slicknav_icon-bar"></span>
                                        <span class="slicknav_icon-bar"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <{if $site.languages|count > 1}>
                        <div class="language-select-form">
                            <div class="language-active" id="languages-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <{$site.active_language.name|htmlspecialchars}>
                            </div>
                            <div class="block_language">
                                <{foreach $site.languages as $language}>
                                    <a class="<{if $language.language_id == $site.active_language.language_id}>active<{/if}>" href="<{$language.page_url}>">
                                        <{$language.name|htmlspecialchars}>
                                    </a>
                                <{/foreach}>
                            </div>
                        </div>
                        <{/if}>
                        
                        <div class="section" id="top-social">
                            <div class="widget HTML" id="HTML10"></div>
                            <div class="top-social-icons">
                                <i class="fa fa-facebook"></i>
                                <i class="fa fa-instagram"></i>
                                <i class="fa fa-vk"></i>
                                <i class="fa fa-pinterest"></i>
                                <i class="fa fa-twitter"></i>
                                <i class="fa fa-heart"></i>
                                <i class="fa fa-google-plus"></i>
                                <i class="fa fa-tumblr"></i>
                                <i class="fa fa-youtube"></i>
                                <i class="fa fa-yelp"></i>
                            </div>
                        </div>
                    </div>
                    
                        


                    <div class="slicknav_nav slicknav_hidden" id="top-menu-content">
                        <{get_menu "top" "top_menu"}>

                        <{if $top_menu.0|count}>
                            <ul class="header_menu_top">
                                <{foreach $top_menu.0 as $page}>
                                    <li <{if $page.is_active}> active<{/if}>">
                                        <a href="<{$page.href}>">
                                            <{$page.page_name|htmlspecialchars}>
                                        </a>
                                    </li>
                                <{/foreach}>
                            </ul>
                        <{/if}>
                    </div>
                </div>
            </div>
        </div>


        <{block name="module"}>
        <{/block}>

        <{custom_code "footer"}>

        <footer class="footer">
            <nav class="">
                <{get_menu "bottom" "bottom_menu"}>

                <{if $bottom_menu.0|count}>
                    <ul class="navbar-nav mr-auto">
                        <{foreach $bottom_menu.0 as $page}>
                            <li class="nav-item<{if $page.is_active}> active<{/if}>">
                                <a class="nav-link" href="<{$page.href}>">
                                    <{$page.page_name|htmlspecialchars}>
                                </a>
                            </li>
                        <{/foreach}>
                    </ul>
                <{/if}>
            </nav>

            <nav class="footer_container">
                <div class="copyright">
                    <{$site.name|htmlspecialchars}>
                    ©
                    <{$site.date_founded}>
                    -
                    <{0|as_date:"Y"}>
                </div>

                <div class="who_make">
                    <a class="nav-link" href="http://totalcan.com.ua/" title="Создание сайтов, разработка интернет магазинов, раскрутка сайтов">
                        Создание сайта totalcan.com.ua
                    </a>
                    <a class="nav-link" href="http://bravosell.com/ru/" title="Сайт работает на CMS Bravosell">
                        CMS интернет магазина - bravosell
                    </a>
                </div>
            </nav>

            <{custom_code "counters"}>
        </footer>
    </div>
        
    <a href="#" class="scrollToTop">
        <i class="fa fa-arrow-up"></i>
    </a>
        
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <button class="pswp__button pswp__button--share" title="Share"></button>
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
    <img id="loader_img" style="display: none;" src="<{file 'assets/img/load.jpg'}>" alt="pic">
    <{custom_code "body_close"}>
<{/block}>
