# /* ==========================================================================
#  * file          lib.navSocial.ts
#  * info          Social navigation at footer
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
lib.navTop = COA
lib.navTop {

    10 = TEXT
    10.value (
        <nav id="navMeta">
          <ul class="menu align-right">
    )

    20 = HMENU
    20 {
        special = list
        special.value = {$top1}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    30 = HMENU
    30 {
        special = list
        special.value = {$top2}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="icon-menu-language" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }
    30 >

    30 = HMENU
    30 {
        special = language
        special.value = 0,1
        special.normalWhenNoLanguage = 0

        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                //linkWrap = | |*| &nbsp;&#47;&nbsp;
                wrapItemAndSub = <li>|</li>
                //linkWrap = <i class="icon-menu-language" aria-hidden="true"></i>
                stdWrap.override = EN || DE
            }

            ACT < .NO
            ACT = 1
            ACT {
                ATagParams = class="active"
            }
            USERDEF1 < .NO
            USERDEF2 < .ACT
        }
    }
    30 >

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
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fas fa-search" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    60 = TEXT
    60.value (
          </ul>
        </nav>
    )
}


lib.navTopMobile = COA
lib.navTopMobile {

    10 = TEXT
    10.value (
        <nav id="navMetaMobile">
        <ul class="menu align-right">
    )

    20 = HMENU
    20 {
        special = list
        special.value = {$top1}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    60 = TEXT
    60.value (
        </ul>
        </nav>
    )
}