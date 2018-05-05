const fs = require('fs'),
    Static = require('koa-static'),
    path = require('path'),
    historyFallback = require('koa2-history-api-fallback'),
    Koa2 = require('koa2');

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

let server = new Koa2();

const staticPath = '../build';

server.use(historyFallback());

server.use(async (ctx, next) => {
    await next();
    debug("method: <" + ctx.request.method + '> url: ' + ctx.request.url);
    // ctx.response.type = 'text/html';
    // const html = fs.readFileSync('../build/index.html');
    // ctx.response.body = html;
});

server.use(Static(
    path.join(__dirname, staticPath))
);

const port = 8081;

server.listen(port);
console.log(`server is running at http://localhost:${port}/`);
