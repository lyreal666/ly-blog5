const fs = require('fs');
const pansoso = require('../extensions/panSpiders/pansoso');

const getResultArr = async (ctx, next) => {
    ctx.response.type = 'application/json';
    const searchStr = ctx.params.panSearchStr;
    const resultArr = await pansoso(searchStr);
    ctx.response.body = resultArr;
    console.log(resultArr);
    await next();
};

module.exports = {
    'GET /panSpider&searchStr=:panSearchStr': getResultArr
};