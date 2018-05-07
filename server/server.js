const fs = require('fs'),
    path = require('path'),
    Koa2 = require('koa2');

// 导入中间件
const startConfig = require('./middlewares/startConfig');
const requestLog = require('./middlewares/requestLog');
const fRouteFallBack = require('./middlewares/fRouteFallBack');
const Static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const Model = require('./model');
const templating = require('./middlewares/templating');
const controllers = require('./middlewares/controller');

let server = new Koa2();

// 加载中间件
server.use(startConfig('dev'));
server.use(requestLog); // 记录请求
server.use(fRouteFallBack);
const staticPath = '../build';
server.use(Static(
    path.join(__dirname, staticPath))
);
server.use(bodyParser());
server.use(controllers());
const isProduction = process.env.NODE_ENV === 'production';
server.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
})); // 加载模板引擎



const port = 8081;
server.listen(port);
console.log(`server is running at http://localhost:${port}/`);
