# /* ==========================================================================
#  * file          020_ext_gridelements.ts
#  * info          Ext. gridelements
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           19-03-08
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

// loaded ts after install the ext:gridelements
[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')]
    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts" extensions="ts">
[global]

tt_content.gridelements_pi1 =< lib.contentElement
    tt_content.gridelements_pi1 {
    templateName = Generic
    variables {
        content =< tt_content.gridelements_view
    }
}

tt_content {
    gridelements_pi1 = COA
    gridelements_pi1 {
        20 {
            10 {
                setup {
                    GridSection < lib.gridelements.defaultGridSetup
                    GridSection {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridSection.html
                        }
                    }

                    GridContainer < lib.gridelements.defaultGridSetup
                    GridContainer {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridContainer.html
                        }
                    }


                    GridTwoColumns < lib.gridelements.defaultGridSetup
                    GridTwoColumns {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridTwoColumns.html
                        }
                    }


                    GridThreeColumns < lib.gridelements.defaultGridSetup
                    GridThreeColumns {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridThreeColumns.html
                        }
                    }
/*
                    GridFourColumns < lib.gridelements.defaultGridSetup
                    GridFourColumns {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridFourColumns.html
                        }
                    }

                    GridContainerWrap < lib.gridelements.defaultGridSetup
                    GridContainerWrap {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridContainerWrap.html
                        }
                    }
                    */

                }
            }
        }
    }
}

tt_content.gridelements_view < tt_content.gridelements_pi1