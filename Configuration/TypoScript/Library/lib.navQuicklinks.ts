# /* ==========================================================================
#  * file          lib.navQuicklinks.ts
#  * info          footer navigation quick links
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
lib.navQuicklinks = HMENU
lib.navQuicklinks {

    special = directory
    special.value = {$navQuicklinkFolder}

    wrap =  <nav id="sitemapNav">|</nav>

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