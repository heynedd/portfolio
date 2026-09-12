// Local-only preview; the reference video is not part of the website.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
http.createServer((req,res) => {
  const url = new URL(req.url, 'http://localhost');
  let file = url.pathname === '/__reference.mp4' ? 'D:/Download/73221087-5155-4032-8610-9a44d3d8bcc4.mp4' : path.join(root, decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
  if (url.pathname !== '/__reference.mp4' && !file.startsWith(root + path.sep)) {res.writeHead(403);return res.end();}
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404);return res.end();}
  const size = fs.statSync(file).size;
  const mime = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.mp4':'video/mp4'}[path.extname(file)] || 'application/octet-stream';
  const range = req.headers.range;
  if (range) {const [start,end] = range.replace('bytes=','').split('-').map(Number);const last=end||size-1; res.writeHead(206,{'Content-Type':mime,'Content-Range':`bytes ${start}-${last}/${size}`,'Accept-Ranges':'bytes','Content-Length':last-start+1});fs.createReadStream(file,{start,end:last}).pipe(res);}
  else {res.writeHead(200,{'Content-Type':mime,'Content-Length':size,'Cache-Control':'no-cache'});fs.createReadStream(file).pipe(res);}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
