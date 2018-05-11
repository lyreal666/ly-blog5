'use strict';

const crypto = require('crypto');

const debug = console.debug;


//----------------sha1 md5 hmac---------------------//
/**
 *
 * @param str string needed to be encrypt
 * @param type encrypt type
 * @returns {*|PromiseLike<ArrayBuffer>} encrypted string
 */
let sha1 = (str, type='sha1') => {
    let hash = crypto.createHash(type);
    hash.update(str);
    return hash.digest('hex');
} ;

/**
 *
 * @param str
 * @returns {*|PromiseLike<ArrayBuffer>}
 */
let md5 = (str) => sha1(str, 'md5');

let hmac = (str, skey, type='sha256') => {
    const hash = crypto.createHmac(type, skey);
    hash.update(str);
    return hash.digest('hex');
};


//--------------------SAE---------------------//
// 结果是16进制
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {sha1, md5, hmac};

