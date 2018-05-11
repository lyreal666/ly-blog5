"use strict";

const fs = require('fs');
const path = require('path');
const Url = require('url');
const Pan = require('./Pan');
const requests = require('../../utils/download');
const cherrio = require('cheerio');

let url = JSON.parse(fs.readFileSync(path.resolve(__dirname ,'./configs/source.json'), 'utf-8'))
    .pansoso.url;
const pansoso = async (searchStr, offset=1, count=10) => {
    let searchUrl = encodeURI(Url.resolve(url, `${searchStr}_${offset}`));
    let resultArr = [];
    let html;
    try {
        console.log(searchUrl);
        html = await requests.getText(searchUrl);
    } catch (e) {
        console.error(e);
    }
    let $ = cherrio.load(html);
    const pssDivs = $('div.pss');
    pssDivs.each(async (index, div) => {
        let pan = new Pan();
        const a = $(div).find('a')[0];
        const desDiv = $(div).find('div.des')[0];
        if (desDiv) {
            const infos = $(desDiv).text().split(/\s*?,\s*/);
            pan.fileName = infos[0];
            pan.fileSize = infos[1];
            pan.sharer = infos[2];
            pan.shareTime = infos[3];
            pan.vistedTimes = infos[4];
        }

        if (a) {
            const href = $(a).attr('href');
            const exactPanUrl = Url.resolve('http://www.pansoso.com', href);
            const exactPanHtml = await requests.getText(exactPanUrl);
            $ = cherrio.load(exactPanHtml);
            const exactPanA = $('div.down a');
            if (exactPanA[1]) {
                const exactPanHref = $($('div.down a')[1]).attr('href');
                const regStr = /^http:\/\/www\.pansoso\.com\/\?a=go&url=(.+?)&t=.+?&m=$/;
                const res = exactPanHref.match(regStr);
                if (res) {
                    const panUrlArgu = res[1];
                    if (panUrlArgu) {
                        const panUrl = `http://to.pansoso.com/?a=to&url=${panUrlArgu}`;
                        pan.panLink = panUrl;
                    } else {
                        console.error('可能pansoso参数格式产生了变化');
                    }
                } else {
                    console.error(res);
                }

                console.log(exactPanHref);

            } else {
                console.error('可能网盘连接已失效 url: %s', exactPanUrl);
            }
        } else {
            console.error('处理url: %s找不到a连接', searchUrl);
        }

        resultArr.push(pan);
    });
    console.log(resultArr);
    return resultArr;
};

module.exports = pansoso;