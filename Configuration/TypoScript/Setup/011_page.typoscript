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
        X-UA-Compatible = IE=edge
        X-UA-Compatible.httpEquivalent = 1

        robots = index,follow
        viewport  = width=device-width, initial-scale=1.0
    }


	// favicon, see also headerData.ts
    shortcutIcon = EXT:hellotypo3/Resources/Public/images/pbc/favicons/favicon.ico

    // Fluid template
    10 = FLUIDTEMPLATE
    10{
        //templateName < lib.backendLayout

        layoutRootPaths {
            0 = {$myLayoutRootPath}
        }
        partialRootPaths {
            0 = {$myPartialRootPath}
        }
        templateRootPaths {
            0 = {$myTemplateRootPath}
        }

        /*`
        // DATA PREPROCESSING
        dataProcessing {
            // Main menu
            10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            10 {
                //special = directory
                //special.value = 1
                levels = 6
                includeSpacer = 0
                as = menuMain
            }

            // Footer menu
            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            20 {
                special = directory
                special.value = {$navFooter}
                levels = 1
                as = menuFooter
            }


            // Sub menu / flyout
            30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            30 {
                levels = 4
                entryLevel = 1
                expandAll = 0
                includeSpacer = 1
                as = menuSub
            }

            // Lang menu
            40 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            40 {
                special = language
                special.value = {$siteLanguages}
                if.isTrue = {$siteLanguages}
                as = menuLanguage
            }

            // Breadcrumb menu
            50 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            50 {
                special = rootline
                special.range = 0|-1
                includeNotInMenu = 1
                as = menuBreadcrumb
            }

            // Copyright menu
            60 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            60 {
                special = directory
                special.value = {$navCopyright}
                levels = 1
                as = navCopyright
            }

        }
        */



        // ASSIGN TEMPLATE FILES WITH FLUID BACKEND TEMPLATE
        file.stdWrap.cObject = CASE
        file.stdWrap.cObject {

            // slide the template
            key.data = pagelayout

            pagets__1 = TEXT
            pagets__1.value = {$myTemplateRootPath}TemplateHome.html

            pagets__2 = TEXT
            pagets__2.value = {$myTemplateRootPath}TemplateSub.html

        }

        variables {
            101 < styles.content.get
            101.select.where = colPos = 101
            //101.slide = -1

            //102 < styles.content.get
            //102.select.where = colPos = 102

            // footer
            201 < styles.content.get
            201.select.where = colPos = 201
            201.slide = -1
            202 < styles.content.get
            202.select.where = colPos = 202
            202.slide = -1
            203 < styles.content.get
            203.select.where = colPos = 203
            203.slide = -1


            //NAV-MAIN =< lib.navMain
        }
    }

    bodyTagCObject = COA
    bodyTagCObject {
        stdWrap.wrap = <body | >
        stdWrap.case = lower

        //Classes
        10 = COA
        10 {
            stdWrap.noTrimWrap = | class="|" |

            // Add name of the backend-layout
            10 = TEXT
            10 {
                value < lib.backendLayout
                wrap = layout-|
                noTrimWrap = || |
            }

            // Add name of the layout
            20 = TEXT
            20 {
                data = levelfield:-2, layout, slide
                override.field = layout
                wrap = theme-|
                noTrimWrap = || |
                required = 1
            }

            // Add language
            30 = TEXT
            30 {
                wrap = lang-|
                noTrimWrap = || |
                required = 1
            }

            // Add page UID
            40 = TEXT
            40 {
                field = alias // uid
                noTrimWrap = |page-||
            }
        }
    }

}