const { Client } = require('pg');

const db = new Client({
    host: 'localhost',
    user: 'username',
    database: 'database_name',
});

db.connect()
.then(()=>console.log(("Connected to db")))
.catch(err=>console.log("Error, not connected to db",err))

module.exports = db;