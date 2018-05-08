const fs = require('fs');

const dealIndex = async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = fs.readFileSync('../build/index.html');
    await next();
};

module.exports = {
    'GET /': dealIndex,
    'POST /': dealIndex
};