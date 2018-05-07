const dev = require('../bin/dev');
const production = require('../bin/production');

startConfig = (startType) => {
    return async (ctx, next) => {
        if (startType === 'dev') {
            dev()
        } else if(startType === 'pro') {
            production()
        } else {
            //
        }
        await next()
    }
};

module.exports = startConfig;