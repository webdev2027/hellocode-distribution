# /* ==========================================================================
#  * file          022_ext_news.ts
#  * info          Ext. news
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
plugin.tx_news {

    view {
        templateRootPaths {
            100 = {$extensionsRoot}News/Templates/
        }
        partialRootPaths {
            100 = {$extensionsRoot}News/Partials/
        }
        layoutRootPaths {
            100 = {$extensionsRoot}News/Layouts/
        }
        widget.GeorgRinger\News\ViewHelpers\Widget\PaginateViewHelper.templateRootPath = EXT:icaros/Resources/Private/Extensions/News/Templates/
    }



    _LOCAL_LANG {

        default {

        }

        de {
            #dateFormat = %d.%m.%Y
            more-link = Weiterlesen
            back-link = Zurück zur Übersicht
            #list_nonewsfound = Keine ...
        }

    }



    settings {
        displayDummyIfNoMedia = 1
        //crop teaser text after x characters
        cropMaxCharacters = 120

        detail {
            errorHandling = pageNotFoundHandler
            checkPidOfNewsRecord = 0
            registerProperties = keywords,title

            // show social buttons
            showSocialShareButtons = 0
            disqusShortname =

            // media configuration
            media {
                image {
                    lightbox = lightbox[myImageSet]
                    maxWidth = 570c
                    maxHeight = 350c
                }

                video {
                    width = 570
                    height = 350
                }
            }
        }


        list {
            media {
                image {
                    maxWidth = 200
                    maxHeight = 200
                    width = 570c
                    height = 350c
                }
                dummyImage = typo3conf/ext/icaros/Resources/Public/Images/Logos/logo_news_dummy.png
            }


            paginate {
                insertAbove = 0
                insertBelow = 1
                //templatePath = typo3conf/ext/joblinge/Resources/Private/Templates/News/Paginate.html
            }
          }

    } // settings

} // tx_news