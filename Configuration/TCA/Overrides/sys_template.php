<?php
call_user_func(
    function()
    {

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('hellotypo3', 'Configuration/TypoScript', 'hellotypo3 Distribution');

    }
);