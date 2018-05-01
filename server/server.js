const fs = require('fs'),
    Static = require('koa-static'),
    path = require('path'),
    Koa2 = require('koa2');

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

let server = new Koa2();

const staticPath = '../build';

server.use(Static(
    path.join(__dirname, staticPath))
);

// server.use(async (ctx, next) => {
//     await next();
//     debug("method: <" + req.method + '> url: ' + req.url + ' connect!');
//     ctx.response.type = 'text/html';
//     const html = fs.readFileSync('../build/index.html');
//     ctx.response.body = html;
// });

server.listen(8080);
console.log('server is running at http://127.0.0.1:8080/');
