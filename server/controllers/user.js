"use strict";

async function dealLogin(ctx, next) {
    const account = ctx.request.body.account;
    const pwd = ctx.request.body.password;
    if (account === 'ly@com' && pwd ==='ly') {
        ctx.response.type = 'text/html';
        ctx.response.body = '<h2>登入成功</h2>'
    }
}


module.exports = {
    'POST /user/login': dealLogin
};