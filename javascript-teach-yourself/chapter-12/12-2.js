const html = `
<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー</header>
`;

function* extractor (string) {
    const matches = string.matchAll(/<(h[1-6])>(.+)<\/\1>/g);
    for (const txt of matches) {
        yield txt[2];
    }
}

let extractHtml = extractor(html);
for (const txt of extractHtml) {
    console.log(txt);
}