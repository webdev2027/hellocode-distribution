# /* ==========================================================================
#  * file          lib.navCopyright.ts
#  * info          copyright/footer navigation
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

lib.navCopyright = COA
lib.navCopyright {

    30 = HMENU
    30 {
        special = directory
        special.value = {$navCopyright}

        1 = TMENU
        1 {
            wrap = <ul class="list-inline footer-nav">|</ul>

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                wrapItemAndSub = <li class="list-inline-item">|</li>
            }
        }
    }

}