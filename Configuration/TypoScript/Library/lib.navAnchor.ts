# /* ==========================================================================
#  * file          lib.navAnchor.ts
#  * info          anchor sub navigation for subpages
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
lib.navAnchor = COA
lib.navAnchor  {

    10 = TEXT
    10.value = <ul class="navbar-nav ml-auto">

    20 = CONTENT
    20 {
        //wrap = <nav><ul>|</ul></nav>
        table = tt_content
        select.where = colPos=101 AND sectionIndex=1 AND header <> '' AND (header_layout = 5 OR header_layout = 100)
        select.orderBy = sorting
        renderObj = COA
        renderObj {
            10 = TEXT
            10 {
                dataWrap = <li class="nav-item anchor{field:uid}">|</li>
                field = header
                typolink.parameter.field = pid
                typolink.section.field = uid
                typolink.ATagParams = class="nav-link" data-scroll="data-scroll"
                required = 1
            }
        }
    }

    30 = TEXT
    30.value = </ul>
}