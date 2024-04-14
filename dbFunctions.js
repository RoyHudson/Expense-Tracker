const fs = require('fs');

function readDb(dbName = 'tracker.js') {
    const data = fs.readFileSync(dbName, 'utf8');
    return JSON.parse(data);
}

function writeDb(obj, dbName = 'tracker.js') {
    if (!obj) { return console.log ('Please provide data to Save')}
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj));
        return console.log('Save Successful')
    } catch (err) {
        return console.log ('Save failed: ');
    }
}

