//  /* ==========================================================================
//   * file          02_config.ts
//   * info          TYPO3 configuration info
//   *
//   *
//   * url			hellotypo3.de
//   * client       hellotypo3
//   * date         19-03-07
//   *
//   * author         ssa :: hello@hellotypo3.de
//   *
//   * ========================================================================== */
config {

	headerComment (
		hellocode.de
	)

	// doc type, not necessary anymore
	doctype = html5

	// disable cache - `1` only for development!
	no_cache = 0

    // Cache-Header erzeugen
    sendCacheHeaders = 1

    // Cache : 1 week  604800
    cache_period = 604800
    cache_clearAtMidnight = 1

	// https://securityheaders.com & http://bit.ly/2NuMTn9
    additionalHeaders {
        10.header = strict-transport-security:max-age=31536000
        20.header = X-Frame-Options:SAMEORIGIN
        30.header = X-Xss-Protection: 1; mode=block
        40.header = X-Content-Type-Options: nosniff
        50.header = Referrer-Policy:strict-origin
    }

	// email
	spamProtectEmailAddresses = -2
	spamProtectEmailAddresses_atSubst = &nbsp;/at/&nbsp;
	#spamProtectEmailAddresses_lastDotSubst = _

	// comments & includes deactivate
	disablePrefixComment = 1
	inlineStyle2TempFile = 1
	removeDefaultJS = external
	moveJsFromHeaderToFooter = 1


	// baseURL
	// NO baseURL is set
	prefixLocalAnchors = all
	absRefPrefix = auto

	// Allow Crosslinking between Multidomains
	// typolinkCheckRootline = 1
	// typolinkEnableLinksAcrossDomains = 1

	// Wieviel zeichen sollen vom Originaldateinamen verwendet werden
	meaningfulTempFilePrefix = 50

	// MERGE / CONCATENATE
	concatenateJs = 0
	concatenateCss = 0

	// COMPRESS
	compressJs = 0
	compressCss = 0
}