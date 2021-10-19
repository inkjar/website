window.addEventListener("load", () => {
    document.fonts.ready.then(() => {
         if (!document.fonts.check("12px EB Garamond")) {
            let font = new FontFace("EB Garamond", "url(https://raw.githubusercontent.com/octaviopardo/EBGaramond12/master/fonts/webfonts/EBGaramond-Regular.woff2)", {
                style: 'normal',
                unicodeRange: 'U+000-5FF',
                weight: '400'
            });

            font.load().then(() => {
                document.fonts.add(font);
            })
         }
         if (!document.fonts.check("12px Inter")) {
            let font = new FontFace("Inter", "url(https://rsms.me/inter/font-files/Inter-Thin.woff2?v=3.19)", {
                style: 'normal',
                unicodeRange: 'U+000-5FF',
                weight: '400'
            });
              
            font.load().then(() => {
                document.fonts.add(font);
            })
         }    
    })
});
