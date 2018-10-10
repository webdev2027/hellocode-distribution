# /* ==========================================================================
#  * file          024_ext_indexedsearch.ts
#  * info          Ext. form
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-09-14
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */

// sys extension indexed search
page.config.index_enable = 1

config {
    index_enable = 1
    index_externals = 1
    index_metatags = 0
    index_media = 1
}

plugin.tx_indexedsearch {

    view {
        templateRootPaths {
            100 = {$extensionsRoot}Indexsearch/Templates/
        }
        partialRootPaths {
            100 = {$extensionsRoot}Indexsearch/Partials/
        }
        layoutRootPaths {
            100 = {$extensionsRoot}Indexsearch/Layouts/
        }
    }

    _DEFAULT_PI_VARS {
        // only complete words make search faster
        type = 20

        extResume = 1
        group = flat
        lang < config.sys_language_uid
        media = -1
    }

    settings {
        parsetimes = 0
        displayRules = 0
        displayAdvancedSearchLink = 0

        show {
            rules = 0
            parsetimes = 0
            L2sections = 1
            L1sections = 1
            LxALLtypes = 0
            clearSearchBox = 1
            clearSearchBox.enableSubSearchCheckBox = 1
            forbiddenRecords = 0
            alwaysShowPageLinks = 0
            advancedSearchLink = 1
            resultNumber = 1
            // media files in search results
            mediaList = 0
        }

        blind {
            media = 1
            results = 0
            sections = 0
            order = rank_flag
            defOp = 1
            desc = 0
            freeIndexUid = -1
        }

        search {
            rootPidList = 1
            page_links = 15
            exactCount = 1
        }
    }
}