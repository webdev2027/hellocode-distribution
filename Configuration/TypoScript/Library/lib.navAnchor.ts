# /* ==========================================================================
#  * file          lib.navAnchor.ts
#  * info          anchor sub navigation for subpages
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */
lib.navAnchor = COA
lib.navAnchor  {

    5 = TEXT
    5.value = <div class="medium-9 large-10 cell">

    10 = TEXT
    10.value = <nav id="anchorNav">

    15 = TEXT
    15.value = <ul class="menu">

    20 = TEXT
    20.value = <li class="menu-text">

    25 = TEXT
    25 {
        field = title // subtitle
    }

    30 = TEXT
    30.value = </li>

    50 = CONTENT
    50 {
        //wrap = <nav><ul>|</ul></nav>
        table = tt_content
        select.where = colPos=101 AND sectionIndex=1 AND header <> '' AND (header_layout < 2 OR header_layout = 100)
        select.orderBy = sorting
        renderObj = COA
        renderObj {
            10 = TEXT
            10 {
                dataWrap = <li class="anchor{field:uid}">|</li>
                // not working ? wrapItemAndSub = <li id="anchor{field:uid}" class="firstChild">|</li> |*| <li id="nav{field:uid}">|</li> |*| <li id="nav{field:uid}" class="lastChild">|</li>
                field = header
                typolink.parameter.field = pid
                typolink.section.field = uid
                typolink.ATagParams = class="anchorLink"
                required = 1
            }
        }
    }

    60 = TEXT
    60.value = </ul>

    70 = TEXT
    70.value = </nav>

    80 = TEXT
    80.value = </div><!-- /cell -->

    90 = TEXT
    90.value = <div class="medium-3 large-2 cell text-right">

    95 = TEXT
    95.value (
        <a href="https://shop.icaros.com" target="_blank" class="button primary" style="margin:12px 0 0;">Order Now</a>
    )

    100 = TEXT
    100.value = </div><!-- /cell -->
}