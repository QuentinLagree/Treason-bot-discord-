const mysql = require("mysql")
const {config} = require("../src/tools/yaml")

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
})

connection.connect()

module.exports = connection

