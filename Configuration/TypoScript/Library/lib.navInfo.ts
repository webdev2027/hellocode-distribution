# /* ==========================================================================
#  * file          lib.navInfo.ts
#  * info          Info navigation at footer
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
lib.navInfo = HMENU
lib.navInfo {

    special = directory
    special.value = {$navInfo}

    wrap =  <nav id="footerNav">|</nav>

    1 = TMENU
    1 {
        noBlur = 1
        expAll = 1
        wrap = <ul class="vertical menu">|</ul>

        NO = 1
        NO {
            wrapItemAndSub = <li id="nav{field:uid}" class="firstChild">|</li> |*| <li id="nav{field:uid}">|</li> |*| <li id="nav{field:uid}" class="lastChild">|</li>
            wrapItemAndSub.insertData = 1
        }

        CUR < .NO
        CUR {
            wrapItemAndSub = <li id="nav{field:uid} current" class="firstChild">|</li> |*| <li id="nav{field:uid}" class="current">|</li> |*| <li id="nav{field:uid}" class="lastChild current">|</li>
        }

        ACT < .NO
        ACT {
            wrapItemAndSub = <li id="nav{field:uid} active" class="firstChild">|</li> |*| <li id="nav{field:uid}" class="active">|</li> |*| <li id="nav{field:uid}" class="lastChild active">|</li>
        }
    }

} // HMENU