<?php
call_user_func(
    function()
    {

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('icaros', 'Configuration/TypoScript', 'ICAROS Distribution');

    }
);