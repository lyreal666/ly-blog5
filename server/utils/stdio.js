"use strict";

const readline = require('readline');

const input = (hint) => {
// 创建readline接口实例
    console.log(hint);
    process.stdin.pipe(process.stdout);
    let flag = true;
    process.stdin.on('data', (data) => {
        if (data === '\n') {
            process.stdin.pause();
            flag = false;
        }
    });

};

(async () => {
    let answer = input('输入: ');
    console.log('你输入的是: %s', answer);
})();