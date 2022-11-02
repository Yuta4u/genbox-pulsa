const mysql = require("mysql")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "genbox_pulsa",
})

db.connect((err) => {
  err ? console.error(err) : console.log("Database Berhasil..")
})

module.exports = db // form untuk pembuatan table
