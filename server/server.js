const fs = require('fs'),
    path = require('path'),
    Koa2 = require('koa2');

// 导入中间件
const log4j = require('./middlewares/log4jConfig');
const startConfig = require('./middlewares/startConfig');
const requestLog = require('./middlewares/requestLog');
const Static = require('koa-static');
const bodyParser = require('koa-bodyparser');
//const Model = require('./database/model');
const templating = require('./middlewares/templating');
const {restify} = require('./middlewares/rest');
const controllers = require('./middlewares/controller');

let server = new Koa2();

// 加载中间件
server.use(log4j);
server.use(startConfig('dev'));
server.use(requestLog); // 记录请求
let staticPath = '../build';
server.use(Static(
    path.join(__dirname, staticPath))
);
server.use(bodyParser());
server.use(restify('/api/'));
server.use(controllers(['controllers', 'api']));
const isProduction = process.env.NODE_ENV === 'production';
server.use(templating('views', { // 加载模板引擎
    noCache: !isProduction,
    watch: !isProduction
}));

const port = 8081;
server.listen(port);
console.log(`server is running at http://localhost:${port}/`);
