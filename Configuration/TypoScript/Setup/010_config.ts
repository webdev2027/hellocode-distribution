//  /* ==========================================================================
//   * file          02_config.ts
//   * info          TYPO3 configuration info
//   *
//   *
//   * url			hellotypo3.de
//   * client         hellotypo3
//   * date           18-08-10
//   *
//   * author         ssa :: hello@hellotypo3.de
//   *
//   * ========================================================================== */
config {

	headerComment (
		INTERPAGE
	)

	// doc type
	doctype = html5

	// disable cache - only for development!
	no_cache = 0

    // Cache-Header erzeugen
    sendCacheHeaders = 1


    // cache
    // 8 hours 28800
    // 1 day 86400
    // 1 week  604800
    // 4 weeks 2419200
    cache_period = 604800
    cache_clearAtMidnight = 0

	// https://securityheaders.com & http://bit.ly/2NuMTn9
    additionalHeaders {
        10.header = strict-transport-security:max-age=31536000
        20.header = X-Frame-Options:SAMEORIGIN
        30.header = X-Xss-Protection: 1; mode=block
        40.header = X-Content-Type-Options: nosniff
        50.header = Referrer-Policy:strict-origin
    }

	// admin panel
	admPanel = 0
	contentObjectExceptionHandler = 0

	// email
	spamProtectEmailAddresses = 1
	// spamProtectEmailAddresses_atSubst = &nbsp;[at]&nbsp;

	// comments & includes deactivate
	disablePrefixComment = 1
	inlineStyle2TempFile = 1
	removeDefaultJS = external


	// baseURL
	//  NO baseURL is set
	// baseURL = {$baseURL} // see language.ts
	prefixLocalAnchors = all
	absRefPrefix = auto


	// REALURL
	simulateStaticDocuments = 0
	tx_realurl_enable = 1

	// Allow Crosslinking between Multidomains
	// typolinkCheckRootline = 1
	// typolinkEnableLinksAcrossDomains = 1

	// Wieviel zeichen sollen vom Originaldateinamen verwendet werden
	meaningfulTempFilePrefix = 50

	// MERGE / CONCATENATE
	concatenateJs = 1
	concatenateCss = 1

	// COMPRESS
	compressJs = 1
	compressCss = 1

	// remove typo3 title
	// noPageTitle = 1 // was 2
}