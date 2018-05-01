"use strict";
import React from 'react';

const debug = (...args) => {
    console.log(args.reduce((x, y) => x + y + ' ', ''));
};

export default () => {
    return <h1>管理员</h1>
}