# /* ==========================================================================
#  * file          lib.navSocial.ts
#  * info          Social navigation at footer
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
lib.navSocial = COA
lib.navSocial {

    10 = TEXT
    10.value (
        <nav id="socialNav">
          <ul class="menu align-right">
    )

    20 = HMENU
    20 {
        special = list
        special.value = {$socialFacebook}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fab fa-facebook" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    30 = HMENU
    30 {
        special = list
        special.value = {$socialInstagram}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fab fa-instagram" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    40 = HMENU
    40 {
        special = list
        special.value = {$socialLinkedin}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fab fa-linkedin" aria-hidden="true"></i>
                ATagBeforeWrap = 1
            }
        }
    }

    50 = HMENU
    50 {
        special = list
        special.value = {$socialTwitter}

        1 = TMENU
        1 {
            noBlur = 1
            expAll = 1

            NO = 1
            NO {
                stdWrap.field =
                wrapItemAndSub = <li>|</li>
                linkWrap = <i class="fab fa-twitter" aria-hidden="true"></i>
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