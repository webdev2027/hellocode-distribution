<?php

// https://docs.typo3.org/typo3cms/TSconfigReference/UsingSetting/Index.html#setting-default-user-tsconfig

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig('
    options {
    
      pageTree {
        showPageIdWithTitle = 1
    
        backgroundColor {
          2 = rgba(63, 165, 53, 0.5)
        }
      }
    
      clearCache.system = 1
    }
');