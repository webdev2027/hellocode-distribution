# /* ==========================================================================
#  * file          04_language.ts
#  * info          language settings
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */

// see also : http://blog.webentwickler.at/mehrsprachigkeit-in-typo3-konfigurieren/
// and : http://bit.ly/2tGeGZq
// and real URL https://pastebin.com/PiEXJVF5 / http://www.dmitry-dulepov.com/2009/02/realurl-separate-language-domains-in.html

// default english
config {
	sys_language_uid = 0
	language = en
	locale_all = en_GB.UTF8
	htmlTag_langKey = en
	// htmlTag_setParams = class="no-js" lang="de-DE"

	// linkVars = L
	linkVars = L(0-1)
	uniqueLinkVars = 1
	//defaultGetVars.L = 0

	// https://docs.typo3.org/typo3cms/TyposcriptReference/Setup/Config/Index.html#sys-language-overlay
	sys_language_mode = content_fallback
	// sys_language_mode = strict
	// When you set config.sys_language_overlay it tells Typo3 to actually get all the records from the default language

	// sys_language_overlay = 1
	sys_language_overlay = hideNonTranslated
	// http://stackoverflow.com/questions/17188426/typo3-unique-content-elements-in-translations-not-dsplaying
}
/*
	page {
		bodyTag >
		bodyTagCObject = CASE
		bodyTagCObject {
			stdWrap.dataWrap = <body id="page{TSFE:id}" class="en">
		}
	}
*/
// CHECK  # http://stackoverflow.com/questions/10446432/typo3-fluid-template-get-language-code
//temp.languageKey = TEXT
//temp.languageKey.value = en


// deutsch L=1
//[globalVar = GP:L=1] || [globalString = ENV:HTTP_HOST = https://www.domain.net/]
//[globalString = IENV:HTTP_HOST = *domain.net]
[globalVar = GP:L=1]
	config {
		sys_language_uid = 1
		language = de
		locale_all = de_DE.UTF8
		htmlTag_langKey = de
	}
/*
	page {
		bodyTag >
		bodyTagCObject = CASE
		bodyTagCObject {
			stdWrap.dataWrap = <body id="page{TSFE:id}" class="de">
		}
	}
*/
	//temp.languageKey.value = de
[GLOBAL]


//lib.languageKey < temp.languageKey