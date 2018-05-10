'use strict';

const log4js = require('log4js');
const path = require('path');
// log the cheese logger messages to a file, and the console ones as well.
log4js.configure({
    appenders: {
        err: { type: 'file', filename: path.resolve(__dirname, '../log/err.log')},
        recoding: {type: 'file', filename: path.resolve(__dirname, '../log/recoding.log')},
        console: { type: 'console' }
    },
    categories: {
        logErr: { appenders: ['err'], level: 'error' },
        recoding: { appenders: ['recoding'], level: 'trace' },
        default: { appenders: ['console'], level: 'trace' }
    }
});

const log4j = async (ctx, next) => {
    ctx.ErrLogger = log4js.getLogger('logErr');
    ctx.rcdLogger = log4js.getLogger('recoding');
    ctx.logger = log4js.getLogger();

    await next();
};
module.exports = log4j;