const db = require("../config/db.js");
const bcrypt = require("bcrypt/bcrypt");

class User {


    static async createUsers(user){

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        await db.query(`INSERT INTO users (first_name, last_name, email, username, password) VALUES('${user.firstName}','${user.lastName}','${user.email}','${user.username}','${hashPassword}')`);
    }
}

module.exports = User;