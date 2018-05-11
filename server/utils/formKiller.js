"use strict";
/**
 * 处理表单相关工具
 * 1. parseForm 返回给定html字符串中的表单对象
 */

const cheerio = require('cheerio');
const util = require('util');

const print = console.debug;

let formKiller = module.exports;

/**
 * 返回给定html字符串中的表单对象
 * @param html
 * @returns {Array}
 */
formKiller.parseForm = (html) => {
    const $ = cheerio.load(html);
    let parsedForms = [];
    $('form').each((index, form) => {
        let parsedForm = {};
        $(form).find(':input').each((index, input) => {
            const name = $(input).attr('name');
            name ? parsedForm[name] = $(input).val() : null;
        });
        parsedForms.push(parsedForm);
    });

    return parsedForms.length <= 1 ? parsedForms[0] : parsedForms
};
