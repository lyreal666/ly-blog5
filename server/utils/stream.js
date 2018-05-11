"use strict";

/**
 * 读取流中的所有chunk并在promise中返回utf-8编码后的字符串
 * @param rStream
 * @returns {Promise<any>}
 */
const streamToStr = (rStream) => {
    return new Promise(((resolve, reject) => {
        let buffer = [];
        rStream.on('data', (chunk) => {
            buffer.push(chunk);
        });

        rStream.on('error', (err) => {
            console.error(err.stack);
            buffer = null;
            reject();
        });

        rStream.on('end', () => {
            resolve(Buffer.concat(buffer).toString('utf-8'));
        })
    }))
};

module.exports = {
    streamToStr: streamToStr
};