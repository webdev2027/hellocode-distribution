# /* ==========================================================================
#  * file          lib.navMobile.ts
#  * info          main navigation at header
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
# /* ==========================================================================
#  * file          lib.navMainMobile.ts
#  * info          Main Navigation Mobile Screen
#  *
#  *
#  * url			rensoan.de
#  * client         renosan munich
#  * date           16-06-15
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
lib.navMobile = COA
lib.navMobile {

    10 = TEXT
    10.value (
        <button id="navDropdown" class="button" type="button" data-toggle="navMobileDropdown">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="dropdown-pane bottom" id="navMobileDropdown" data-dropdown data-auto-focus="true">
    )
    10 >

    11 = TEXT
    11.value (
        <input id="main-menu-state" type="checkbox" />
        <label class="main-menu-btn" for="main-menu-state">
            <span class="main-menu-btn-icon"></span>
        </label>
    )
    #11 >

    15 = TEXT
    15.value (
        <ul id="main-menu" class="sm sm-clean level0">
    )

    20 = HMENU
    20 {

        entryLevel = 0

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1
            //wrap = <ul id="main-menu" class="sm sm-clean level0">|</ul>

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                wrapItemAndSub = <li>|</li>
            }

            CUR < .NO
            CUR {
                wrapItemAndSub = <li class="current">|</li>
            }

            ACT < .NO
            ACT {
                wrapItemAndSub = <li class="active">|</li>
            }
        }

        2 < .1
        2 {
            wrap = <ul class="level1">|</ul>
        }

        3 < .1
        3 {
            wrap = <ul class="level2">|</ul>
        }

        4 < .1
        4 {
            wrap = <ul class="level3">|</ul>
        }
    }

    30 = HMENU
    30 {
        special = list
        special.value = {$top1}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    40 = HMENU
    40 {
        special = list
        special.value = {$top3}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fas fa-search" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    85 = TEXT
    85.value (
        </ul>
    )

    90 = TEXT
    90.value (
        </div>
    )
    90 >

}