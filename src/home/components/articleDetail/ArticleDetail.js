"use strict";


const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};