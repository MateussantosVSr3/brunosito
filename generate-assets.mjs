import sharp from 'sharp';
await sharp('public/logo.jpg').extract({ left: 59, top: 42, width: 54, height: 54 }).resize(128,128).png().toFile('public/favicon.png');
const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#111827"/><path d="M80 80H1120M80 550H1120" stroke="#C99A32" stroke-opacity=".6"/><text x="600" y="398" text-anchor="middle" font-family="Arial" font-size="42" fill="#F5F3EE">Estratégia que se transforma em execução.</text><text x="600" y="462" text-anchor="middle" font-family="Arial" font-size="23" fill="#C99A32">CONSULTORIA INDEPENDENTE · PROCESSOS &amp; PROJETOS</text></svg>`);
const logo = await sharp('public/logo.jpg').resize(264,226).toBuffer();
await sharp(background).composite([{input:logo,left:468,top:110}]).png().toFile('public/social-card.png');
