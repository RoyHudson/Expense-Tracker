const fs = require('fs');

function readDb(dbName = 'wallets.json') {
    const data = fs.readFileSync(dbName, 'utf8');
    return JSON.parse(data);
}

function writeDb(wallet, dbName = 'wallets.json') {
    if (!wallet) { return console.log ('Please provide data to Save')}
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj));
        return console.log('Save Successful')
    } catch (err) {
        return console.log ('Save failed: ');
    }
}

module.exports = { readDb, writeDb };