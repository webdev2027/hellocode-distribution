page {
    headerData {
        // Google Analytics
        99 = TEXT
        99.value (
            <script>
            var gaProperty = 'UA-45095879-13';
            var disableStr = 'ga-disable-' + gaProperty;
            if (document.cookie.indexOf(disableStr + '=true') > -1) {
                window[disableStr] = true;
            }
            function gaOptout() {
                document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
                window[disableStr] = true;
                alert('Das Tracking ist jetzt deaktiviert');
            }
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-45095879-13', 'auto');
            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');
            </script>
        )

        // favicons at root
        199 = TEXT
        199.value (
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FF6600">
        <meta name="msapplication-TileColor" content="#F2F2F2">
        <meta name="theme-color" content="#F2F2F2">

        )
    }
}

