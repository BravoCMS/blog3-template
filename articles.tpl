<{extends 'layout/layout.tpl'}><{block name="template-name"}>    /articles.tpl<{/block}><{block name=title}>    <{$module.name|htmlspecialchars}><{/block}><{block name="module"}>        <div id="center">        <div class="articles_desc">            <div class="out-ext-info">                <{$module.text}>            </div>        </div>        <div class="articles_container">            <{foreach $articles as $article}>                <div class="article_details article_details_news short">                    <h3 class="art-title">                        <a href="<{$article.relative_url}>" title="<{$article.name|escape}>">                            <{$article.short_name|htmlspecialchars}>                        </a>                    </h3>                        <{if $article.cover}>                        <a href="<{$article.relative_url}>" title="<{$article.name|escape}>">                            <span class="article_img">                                <img src="<{$article.cover.photo_file_small}>"/>                            </span>                        </a>                    <{/if}>                    <div class="article_info">                        <p class="morenews-wrp">                            <a class="read_more_news" href="<{$article.relative_url}>">                                подробнее                            </a>                        </p>                    </div>                </div>            <{/foreach}>        </div>    </div>        <div id="left">        <div class="content"></div>    </div>                            <div class="row">        <{include 'misc/pagination.tpl'}>    </div><{/block}>