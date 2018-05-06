const defaultConfig = './configs/dbConfig/default.js';
// 可设定为绝对路径，如 /opt/product/config-override.js
const overrideConfig = './configs/dbConfig/override.js';
const testConfig = './configs/dbConfig/test';

const fs = require('fs');

let config = null;

if (process.env.NODE_ENV === 'test') {
    console.log(`Load ${testConfig}...`);
    config = require(testConfig);
} else {
    console.log(`Load ${defaultConfig}...`);
    config = require(defaultConfig);
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`Load ${overrideConfig}...`);
            config = Object.assign(config, require(overrideConfig));
        }
    } catch (err) {
        console.log(`Cannot load ${overrideConfig}.`);
    }
}

module.exports = config;