<?php

// https://docs.typo3.org/typo3cms/TSconfigReference/UsingSetting/Index.html#setting-default-user-tsconfig

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('
    options {
    
      pageTree {
        showPageIdWithTitle = 1
    
        backgroundColor {
          11 = rgba(63, 165, 53, 0.5)
          26 = rgba(63, 165, 53, 0.5)
        }
      }
    
      clearCache.system = 1
    }
');


\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTs/TCEFORM.txt">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTs/TCAdefaults.txt">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTs/EXTENSIONS.txt">'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTs/Mod/web_layout.txt">'
);


// ckEditor RTE
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTs/Rte/CKEDITOR.txt">'
);
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['custom'] = 'EXT:' . $_EXTKEY . '/Configuration/RTE/hellotypo3_ckeditor.yaml';