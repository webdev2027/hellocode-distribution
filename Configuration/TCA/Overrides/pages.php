<?php
// https://docs.typo3.org/typo3cms/TSconfigReference/UsingSetting/Index.html
// to insert files in root page properties
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
    'hellotypo3',
    'Configuration/PageTs/TCEMAIN.txt',
    'hellotypo3 standard TSconfig'
);