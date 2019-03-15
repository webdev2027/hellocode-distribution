# /* ==========================================================================
#  * file          04_language.ts
#  * info          language settings
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

//english = 0
config {
	linkVars = L(0-3)

	sys_language_uid = 0

	language = en
	locale_all = en_EN.UTF-8
	htmlTag_setParams = lang="en"

    // https://www.scrollleiste.de/web/tutorial-mehrsprachigkeit-in-typo3-einrichten
	sys_language_mode = content_fallback;3,0
	sys_language_overlay = 1
}

page.bodyTagCObject.10.30.value = en
/*
//Expression could not be parsed, fallback kicks in. It looks like an old condition with only one equal sign.
//{"expression":"globalVar =  GP:L= 1"}

[globalVar =  GP:L= 1]
//french = 1
config {
	sys_language_uid = 1

	language = fr
	locale_all = fr_FR.UTF-8
	htmlTag_setParams = lang="fr"
}

page.bodyTagCObject.10.30.value = fr
[global]


[globalVar =  GP:L= 2]
//ital = 2
config {
	sys_language_uid = 2

	language = it
	locale_all = it_IT.UTF-8
	htmlTag_setParams = lang="it"
}

page.bodyTagCObject.10.30.value = it
[global]

[globalVar =  GP:L= 3]
//espanol= 3
config {
	sys_language_uid = 3

	language = es
	locale_all = es_ES.UTF-8
	htmlTag_setParams = lang="de"
}

page.bodyTagCObject.10.30.value = es
[global]*/
