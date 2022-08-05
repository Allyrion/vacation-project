const { Client } = require('pg');

const db = new Client({
    host: 'localhost',
    port: 5432,
    user: 'Kishan',
    database: 'vaystaytion',
});

db.connect()
.then(()=>console.log(("Connected to db")))
.catch(err=>console.log("Error, not connected to db",err))

module.exports = db;