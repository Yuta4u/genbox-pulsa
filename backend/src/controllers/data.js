// const Pokemon = require("../models/pokemon") // database
const { validationResult } = require("express-validator")
const db = require("../models/db_config")

// POST
const post = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const err = new Error("input tidak valid")
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  }
  let temp = {
    tanggal: req.body.tanggal,
    tipe: req.body.tipe,
    nominal: req.body.nominal,
  }

  const sql = `INSERT INTO riwayat (tanggal, tipe, nominal)
            VALUES ('${temp.tanggal}', '${temp.tipe}','${temp.nominal}')`

  db.query(sql, (err, result) => {
    if (err) throw err
    console.log("data berhasil di POST")
    res.status(200).json({
      message: "data berhasil di POST",
      data: result,
    })
  })
}

// GET
const dataSaldo = (req, res) => {
  const sql = "SELECT * FROM saldo"
  db.query(sql, (err, result) => {
    if (err) throw err
    res.status(200).json({
      message: "data berhasil GET",
      data: result,
    })
  })
}

const dataRiwayat = (req, res) => {
  const sql = "SELECT * FROM riwayat"
  db.query(sql, (err, result) => {
    if (err) throw err
    res.status(200).json({
      message: "data berhasil GET",
      data: result,
    })
  })
}

const search = (req, res) => {
  const id = req.params.id
  const sql = `SELECT * FROM saldo where id='${id}'`

  db.query(sql, (e, response) => {
    e ? console.error(e) : false
    res.status(200).json({
      status: "OK",
      code: 200,
      messege: "Success",
      data: response,
    })
  })
}

// DELETE
const del = (req, res, next) => {
  const params = req.params.id
  const sql = `DELETE FROM profile WHERE id='${params}'`

  db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Data Berhasil Dibinasakan!")
    res.status(200).json({
      message: "data berhasil di DELETE",
      data: result,
    })
  })
}

// update
const updateData = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const err = new Error("input tidak valid")
    err.errorStatus = 400
    err.data = errors.array()
    throw err
  }

  let id = req.params.id

  let temp = {
    saldo: req.body.saldo,
  }

  console.log(req)

  const sql = `UPDATE saldo SET saldo="${temp.saldo}"  WHERE id="${id}"`

  db.query(sql, (err, result) => {
    if (err) throw err
    console.log("Datamu Berhasil Diedit di : edit")
    res.status(200).json({
      message: "berhasil TOPUP yeayyy!!",
    })
  })
}

module.exports = {
  post,
  dataSaldo,
  dataRiwayat,
  del,
  updateData,
  search,
}
