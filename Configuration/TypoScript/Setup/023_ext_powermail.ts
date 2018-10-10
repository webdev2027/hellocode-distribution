# /* ==========================================================================
#  * file          023_ext_form.ts
#  * info          Ext. form
#  *
#  *
#  * url			icaros.com
#  * client         icaros
#  * date           18-09-14
#  *
#  * author         ssa :: hello@hellocode.de
#  *
#  * ========================================================================== */

// https://www.sklein-medien.de/tutorials/detail/eigene-templates-im-neuen-extform-framework-zuweisen/
// https://docs.typo3.org/typo3cms/drafts/code.tritum.de/TYPO3.CMS/Form_Documentation/Index.html
/*
plugin.tx_form.settings.yamlConfigurations {
    100 = EXT:icaros/Configuration/Yaml/setup.form.yaml
}

module.tx_form.settings.yamlConfigurations {
    100 = EXT:icaros/Configuration/Yaml/setup.form.yaml
}
*/


// USE POWERMAIL INSTEAD !!!

plugin.tx_powermail {
    view {
        templateRootPaths {
            100 = {$extensionsRoot}Powermail/Templates/
        }
        partialRootPaths {
            100 = {$extensionsRoot}Powermail/Partials/
        }
        layoutRootPaths {
            100 = {$extensionsRoot}Powermail/Layouts/
        }
    }

    // Modify localization of labels
    _LOCAL_LANG {
    default {
            //confirmation_message = Are these values correct?
        }
        de {
            //confirmation_message = Sind diese Eingaben korrekt?
        }
    }


    settings {
        setup {
            main {
                pid = 36
            }
        }
    }
}