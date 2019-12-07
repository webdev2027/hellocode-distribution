# /* ==========================================================================
#  * file          lib.imageResources.ts
#  * info          fal image from rpage properties / resources / media
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
/*
lib.imageResources = FILES
lib.imageResources {

    references {
        table = pages
        // Seiten-ID ubergabe
        uid.dataWrap= {field:uid}
        fieldName = media
    }

    renderObj = IMAGE
    renderObj {
        file {
            treatIdAsReference = 1
            width       = 1920c
            height      = 450c
            crop.data   = file:current:crop
            import.data = file:current:uid
            // show first image
            import.listNum = 0
        }
        altText.data = file:current:alternative
        //altText.data = file:current:crop
        //params = class="img-responsive"
        wrap = |
    }
}
*/
lib.imageResources = IMAGE
lib.imageResources {
    file {
        import.listNum = 0
        import.data = levelmedia:-1, slide
        treatIdAsReference = 1
    }
    params = class="w100"
}