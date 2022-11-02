const db = require("./db_config")

const sql = `INSERT INTO saldo (tanggal, saldo)
            VALUES ("1/11/2022",  1000000)`

db.query(sql, (err, result) => {
  if (err) throw err
  console.log("Datamu Berhasil Dibuat!")
})

// untuk membuat table
