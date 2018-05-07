const fs = require('fs');

module.exports = async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.type = 'text/html';
        ctx.response.body = fs.readFileSync('../build/index.html');
    }
    await next();
};