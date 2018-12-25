# /* ==========================================================================
#  * file          03_include.ts
#  * info          include css and js at header/footer
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */
page {
	includeCSS {
		css = {$publicPathStyleSheets}app.css
	}

	includeJSLibs {
		jQuery = {$publicPathExt}node_modules/jquery/dist/jquery.js
		jQuery {
			forceOnTop = 1
			//disableCompression = 1
		}
	}

	includeJSFooterlibs {
        //whatinput = {$publicPathExt}node_modules/what-input/dist/what-input.js
        foundationJs = {$publicPathExt}node_modules/foundation-sites/dist/js/foundation.js

		cookie = {$publicPathJavaScript}Libs/cookieconsent.min.js

		fancybox = {$publicPathJavaScript}Libs/jquery.fancybox.min.js
		owlcarousel = {$publicPathJavaScript}Libs/owl.carousel.min.js

        isotope = {$publicPathJavaScript}Libs/isotope.min.js

		wow = {$publicPathJavaScript}Libs/wow.min.js
        smartmenu = {$publicPathJavaScript}Libs/jquery.smartmenus.min.js
	}

	includeJSFooter {
		mainJs = {$publicPathJavaScript}app.js
	}
} // END PAGE



// Contact us Google Maps
[PIDinRootline = 6]
	page.includeJSFooterlibs {
		googlegmap = {$publicPathJavaScript}Libs/jquery.gmap.min.js
    	//googlemapsapi = https://maps.googleapis.com/maps/api/js?key=AIzaSyCx8L_LjX3Gyy30yTKR9RkIj7uz-H2pj4w
    	//googlemapsapi {
        //	external = 1
		//	async = 1
		//}
	}
	page.includeJSFooter {
    	googlemapsinit = {$publicPathJavaScript}maps.js
	}
[GLOBAL]