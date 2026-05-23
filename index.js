const fs = require('fs').promises;

async function makef(path) {
    try {
        await fs.writeFile(path, '', 'utf8');
        return true;
    } catch (error) {
        console.error(`wawaUtils.js/makef(...): Error making file: ${error}`);
        return false;
    }
};
async function delf(path) {
    try {
        await fs.unlink(path)
        return true;
    } catch (error) {
        console.error(`wawaUtils.js/delf(...): Error deleting file: ${error}`);
        return false;
    }
};
async function editf(path, content) {
    try {
        await fs.writeFile(path, content, 'utf8');
        return true;
    } catch (error) {
        console.error(`wawaUtils.js/editf(...): Error writing file: ${error}`);
        return false;
    }
};
async function readf(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        return data;
    } catch (error) {
        console.error(`wawaUtils.js/readf(...): Error reading file: ${error}`);
        return false;
    }
};
async function readjsonf(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`wawaUtils.js/readjsonf(...): Error reading file: ${error}`);
        return false;
    }
};
async function editjsonf(path, content) {
    try {
        await fs.writeFile(path, JSON.stringify(content, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error(`wawaUtils.js/editjsonf(...): Error writing file: ${error}`);
        return false;
    }
};
function rand(type, count) {
    let list;
    let str = '';
    if (!type || !['all', 'a-z', 'A-Z', '0-9', 'a-z 0-9', 'A-Z 0-9'].includes(type)) type = 'all';
    if (!count) count = 1;
    if (type == 'all') list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (type == 'a-z') list = 'abcdefghijklmnopqrstuvwxyz';
    if (type == 'A-Z') list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (type == '0-9') list = '0123456789';
    if (type == 'a-z 0-9') list = 'abcdefghijklmnopqrstuvwxyz0123456789';
    if (type == 'A-Z 0-9') list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < count; i++) {
        str += list[Math.floor(Math.random() * list.length)];
    };
    return str;
};
function randint(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
       console.error('wawaUtils.js/randint(...): Not a valid integer');
       return false;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isHex(hex) {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(hex);
}
function isURL(url) { // Credit to https://stackoverflow.com/questions/3310216/url-regex-without-http-www
    return /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+.*)$/.test(url);
}


module.exports = { makef, delf, editf, readf, readjsonf, editjsonf, rand, randint, isHex, isURL };
