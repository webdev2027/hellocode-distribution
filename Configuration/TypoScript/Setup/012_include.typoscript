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
		css-plugins = {$publicPathStyleSheets}plugins/plugins.css
		css = {$publicPathStyleSheets}style.css
	}

	includeJSFooterlibs {
	    // jquery via plugins.js
		js-plugins = {$publicPathJavaScript}plugins/plugins.js
		fancybox = {$publicPathJavaScript}jquery.fancybox.min.js
	}

	includeJSFooter {
		js-theme = {$publicPathJavaScript}theme.custom.js
		js-theme{
		    defer = 1
		}
	}

	// more info about async & defer : http://bit.ly/2TBwwwd

}