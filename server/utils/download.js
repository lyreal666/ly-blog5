"use strict";
/**
 * 基于superagent的http request工具
 * 1.get
 * 2.post
 * 3.getText
 * 4.postText
 */

const superagent = require('superagent');
const util = require('util');

const debug = console.debug;

const CONFIGS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:59.0) Gecko/20100101 Firefox/59.0',
};

let requests = {};

const agent = superagent.agent();

requests.get = (url, configs=CONFIGS) => {
    util.log(`<Request GET> from ${url}`);
    return agent.get(url).set(configs)
};

requests.post = (url, data, configs=CONFIGS) => {
    util.log(`<Request POST> from ${url}`);
    return agent.post(url).send(data).set(configs)
};

requests.getText = async (url, configs) => {
    return (await requests.get(url, configs)).text;
};

requests.postText = async (url, data,configs) => {
    return (await requests.post(url, data, configs)).text;
};

module.exports = requests;