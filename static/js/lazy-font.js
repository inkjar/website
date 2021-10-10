window.addEventListener("load", () => {
     if (!document.fonts.check("12px JetBrains Mono")) {
        var font = new FontFace("JetBrains Mono", "url(https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/webfonts/JetBrainsMono-Regular.woff2)", {
            style: 'normal',
            unicodeRange: 'U+000-5FF',
            weight: '400'
        });

        font.load().then(() => {
            document.fonts.add(font);
        })
     }
});