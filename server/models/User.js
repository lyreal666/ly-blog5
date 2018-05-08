const db = require('../database/db');

module.exports = db.defineModel('users', {
    account: {
        type: db.STRING(100),
        unique: true
    },
    password: db.STRING(100),
    name: db.STRING(100),
});