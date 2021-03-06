
<{extends 'layout/layout.tpl'}>

<{block name="template-name"}>
    /photo_album.tpl
<{/block}>

<{block name=title}>
    <{$photo_album.title|htmlspecialchars}>
<{/block}>

<{block name="module"}>

    <div class="main_container">
        <div id="main">
            <div id="container">
                <div id="out">
                    <div id="in">
                        <div class="main-content-wrp">
                            <div id="center">
                                <div class="albums-wrp">
                                    <div class="header-image" style="background: url(<{$photo_album.cover.photo_file_small}>) center center / cover no-repeat;">
                                        <h3>
                                            <{$photo_album.name|htmlspecialchars}>
                                        </h3>
                                    </div>
                                    <div class="product_details_photo" id="gallery">
                                        <{$photo_album.text}>
                                        <div class="gallery-photos photoswipe-slider shapeshifted_container" data-pswp-uid="1">
                                            <{foreach $photo_album.photos as $photo}>
                                                <figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" class="ss-active-child">
                                                    <a href="<{$photo.photo_file_small}>" itemprop="contentUrl" data-size="<{$photo.photo_width}>x<{$photo.photo_height}>">
                                                        <img src="<{$photo.photo_file_small}>" itemprop="thumbnail" class="img-responsive gallery-pic" />
                                                    </a>
                                                </figure>
                                            <{/foreach}>
                                        </div>
                                        <{$photo_album.extra}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<{/block}>
