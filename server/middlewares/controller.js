"use strict";

const fs = require('fs'),
      path = require('path');


const router = require('koa-router')();

function addMapping(mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET ')){
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addControllers(dir) {
    const files = fs.readFileSync(dir, 'utf-8');
    const js_files = files.filter(file => file.endWith('.js'));
    js_files.forEach(file => {
        console.log(`process controller: ${file}...`);
        const mapping = require(path.join(__dirname, 'controllers', file));
        console.log(mapping);
        if (mapping) {
            addMapping(mapping);
        }

    })

}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers'; // 如果不传参数，扫描目录默认为'controllers'
    addControllers(router, controllers_dir);
    return router.routes();
};