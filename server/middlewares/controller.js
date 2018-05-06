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
    console.log(`add controllers under dir ${dir}`);
    const files = fs.readdirSync(dir);
    const js_files = files.filter(file => file.endsWith('.js'));

    js_files.forEach(file => {
        console.log(`process controller: ${file}...`);
        const mapping = require(path.join(__dirname.replace('middlewares', ''), 'controllers', file.slice(0, -3)));
        console.log(mapping);
        if (mapping) {
            addMapping(mapping);
        }

    })

}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers'; // 如果不传参数，扫描目录默认为'controllers'
    addControllers(controllers_dir);
    return router.routes();
};