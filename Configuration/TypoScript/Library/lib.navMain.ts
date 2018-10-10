# /* ==========================================================================
#  * file          lib.navMain.ts
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
lib.navMain = HMENU
lib.navMain {

    wrap =  <nav id="navMain">|</nav>

    1 = TMENU
    1 {
        noBlur = 1
        expAll = 1
        wrap = <ul class="menu">|</ul>

        NO = 1
        NO {
            wrapItemAndSub = <li id="nav{field:uid}" class="firstChild">|</li> |*| <li id="nav{field:uid}">|</li> |*| <li id="nav{field:uid}" class="lastChild">|</li>
            wrapItemAndSub.insertData = 1
        }

        ACT < .NO
        ACT {
            wrapItemAndSub = <li id="nav{field:uid}" class="firstChild active">|</li> |*| <li id="nav{field:uid}" class="active">|</li> |*| <li id="nav{field:uid}" class="lastChild active">|</li>
        }


        CUR < .NO
        CUR {
            wrapItemAndSub = <li id="nav{field:uid}" class="firstChild current">|</li> |*| <li id="nav{field:uid}" class="current">|</li> |*| <li id="nav{field:uid}" class="lastChild current">|</li>
        }


        IFSUB < .NO
        IFSUB {
            ATagBeforeWrap = 1
            ATagParams.insertData = 1
            ATagParams = class="has-sub"
        }

        ACTIFSUB < .ACT
    } // 1

    2 < .1
    2 {
        wrap = <div class="navMainPanel"><div class="grid-container"><div class="grid-x grid-padding-x"><div class="small-12 cell"><h4>Products</h4><ul class="menu vertical navSubMain">|</ul></div></div></div></div>
    }

} // HMENU