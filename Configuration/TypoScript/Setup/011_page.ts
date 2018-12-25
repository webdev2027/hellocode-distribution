# /* ==========================================================================
#  * file          01_page.ts
#  * info          TYPO3 Fluidtemplate / page configuration
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
page = PAGE

page {

    typeNum = 0

    // meta tags
    meta {
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1

        robots = index,follow
        viewport  = width=device-width, initial-scale=1.0

		#description.field = description
		#description.ifEmpty = {$defaultDescription}
    }


	// favicon, see root and headerData.ts
    //shortcutIcon = EXT:hellotypo3/Resources/Public/Icons/favicon.ico

    // Fluid template
    10 = FLUIDTEMPLATE
    10{
        /*
        templateName= TEXT
        templateName.stdWrap {
            cObject = CASE
            cObject {
                key.data = levelfield:-2,backend_layout_next_level,slide
                key.override.field = backend_layout

                default = TEXT
                default.value = TemplateHome

                // these are the IDs of the backend_layout records in DB
                1 = TEXT
                1.value = TemplateHome

                2 = TEXT
                2.value = TemplateSubpage
            }
            ifEmpty = Error
        }
*/
        layoutRootPaths {
            0 = {$myLayoutRootPath}
        }
        partialRootPaths {
            0 = {$myPartialRootPath}
        }
        templateRootPaths {
            0 = {$myTemplateRootPath}
        }

        // ASSIGN TEMPLATE FILES WITH FLUID BACKEND TEMPLATE
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {

            // slide the template
            key.data = pagelayout

            //default = TEXT
            //default.value = {$myTemplateRootPath}TemplateHome.html
            pagets__1 = TEXT
            pagets__1.value = {$myTemplateRootPath}TemplateHome.html
            pagets__2 = TEXT
            pagets__2.value = {$myTemplateRootPath}TemplateAnchors.html

        }

        variables {
            NEWSLETTER < styles.content.get
            NEWSLETTER.select.where = colPos = 501
            NEWSLETTER.slide = -1

            MAIN-AREA < styles.content.get
            MAIN-AREA.select.where = colPos = 101

            BIG-IMAGE < styles.content.get
            BIG-IMAGE.select.where = colPos = 201

            NAV-MAIN =< lib.navMain
            NAV-QUICKLINKS =< lib.navQuicklinks
            NAV-SOCIAL =< lib.navSocial
            NAV-INFO =< lib.navInfo
            NAV-ANCHOR =< lib.navAnchor
            NAV-TOP =< lib.navTop
            NAV-TOP-MOBILE =< lib.navTopMobile
        }
    }

    bodyTag >
    bodyTagCObject = CASE
    bodyTagCObject {
        stdWrap.dataWrap = <body id="page{TSFE:id}" class="|">
        stdWrap.splitChar = |
        key.data = pagelayout

        pagets__1 = TEXT
        pagets__1.value = templatehome

        pagets__2 = TEXT
        pagets__2.value = templateanchors

    } // bodytag

} // END PAGE