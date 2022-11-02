const db = require("./db_config")

const sql = `CREATE TABLE riwayat
            (
            id int NOT NULL AUTO_INCREMENT,
            tanggal VARCHAR(20),
            tipe VARCHAR(20),
            nominal VARCHAR(15),
            PRIMARY KEY (id)
            )
            `
db.query(sql, (err, res) => {
  if (err) throw err
  console.log("Table Berhasil Dibuat YEAY...!")
})

// untuk membuat form table yang akan di pakai
