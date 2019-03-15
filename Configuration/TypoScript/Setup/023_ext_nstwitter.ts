# /* ==========================================================================
#  * file          023_ext_nstwitter.ts
#  * info          Ext. ns_twitter
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-09-14
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

plugin.tx_nstwitter {
	view {
		templateRootPaths.100 = {$extensionsRoot}Twitter/Templates/
		partialRootPaths.100 = {$extensionsRoot}Twitter/Partials/
		layoutRootPaths.100 = {$extensionsRoot}Twitter/Layouts/
	}
}

page {
	includeCSS {
		nstwitter_css >
	}
}