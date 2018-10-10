# /* ==========================================================================
#  * file          lib.navLanguage.ts
#  * info          Language Switch EN / DE
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-10-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */

lib.navLanguage = HMENU
lib.navLanguage {

    special = language
    special.value = 0,1
    special.normalWhenNoLanguage = 0

    #wrap = <div>|</div>

    1 = TMENU
    1 {
        noBlur = 1

        NO = 1
        NO {
            #linkWrap =<ul><li>|</li></ul>|*|<ul><li>|</li></ul>|*|<ul><li class="last">|</li></ul>
            linkWrap = | |*| &nbsp;&#47;&nbsp;
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