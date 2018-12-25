# /* ==========================================================================
#  * file          021_ext_fluidstyledcontents.ts
#  * info          Sys Ext. fluidstyledcontent
#  *
#  *
#  * url			hellotypo3.com
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
lib.contentElement {

    templateRootPaths {
        100 = {$extensionsRoot}Fluidstyledcontent/Templates/
    }
    partialRootPaths {
        100 = {$extensionsRoot}Fluidstyledcontent/Partials/
    }
    layoutRootPaths {
        100 = {$extensionsRoot}Fluidstyledcontent/Layouts/
    }

    settings {
        defaultHeaderType = {$styles.content.defaultHeaderType}
        media {
            popup {
                bodyTag = <body style="margin:0; background:#fff;">
                wrap = <a href="javascript:close();"> | </a>
                width = {$styles.content.textmedia.linkWrap.width}
                height = {$styles.content.textmedia.linkWrap.height}
                crop.data = file:current:crop
                JSwindow = 1
                JSwindow {
                    newWindow = {$styles.content.textmedia.linkWrap.newWindow}
                    if.isFalse = {$styles.content.textmedia.linkWrap.lightboxEnabled}
                }
                directImageLink = {$styles.content.textmedia.linkWrap.lightboxEnabled}
                //linkParams.ATagParams.dataWrap =  class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}"
                linkParams.ATagParams.dataWrap = data-fancybox="gallery" class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}"
            }
            additionalConfig {
                no-cookie = 1
            }
        }
    }

}