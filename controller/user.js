const { stringify } = require('querystring');
const database = require('./model/database.json');
const fs = require('fs');
const { rejects } = require('assert');

const saveTODB = (stringify) => {
    return new promise ((resolve, reject) => {
        fs.writeFile('./model/database.json', stringify, (err,data) => {
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

const getusers = (req, res) => {
    const users = database;
    res.status(200).json({
        Message: `All users found and the total is: ${users.length}`,
        data: users
    })
}

const createUser = async (req, res) => {
    const { name, gender, isMarried } = req.body;
    const user = {
        name,
        gender,
        isMarried,
        id:database.length + 1
    }

    database.push(user);

    await saveTODB(JSON.stringify(database, null, 2))

    res.status(201).json({
        Message:'User created successfully',
        data: user
    })
}

module.exports = {
    getusers,
    createUser

    
}


























