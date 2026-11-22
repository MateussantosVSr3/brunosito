import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('out');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.txt':'text/plain', '.xml':'application/xml', '.woff2':'font/woff2' };
export const server = createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    res.setHeader('Content-Type', types[extname(path)] || 'application/octet-stream');
    res.end(await readFile(path));
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(3000,'127.0.0.1',() => console.log('Local: http://127.0.0.1:3000'));
