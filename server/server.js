const fs = require('fs'),
    Static = require('koa-static'),
    path = require('path'),
    bodyParser = require('koa-bodyparser'),
    Koa2 = require('koa2');
// historyFallback = require('koa2-history-api-fallback'),
// server.use(historyFallback());

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

let server = new Koa2();

const staticPath = '../build';

server.use(bodyParser());

server.use(Static(
    path.join(__dirname, staticPath))
);

server.use(async (ctx, next) => {
    await next();
    debug("method: <" + ctx.request.method + '> url: ' + ctx.request.url);
    if (ctx.request.path === '/') {
        ctx.response.type = 'text/html';
        ctx.response.body = fs.readFileSync('../build/index.html');
    }

});

const port = 8081;

server.listen(port);
console.log(`server is running at http://localhost:${port}/`);
