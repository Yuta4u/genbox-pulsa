const express = require("express")
const router = express.Router()
const { body } = require("express-validator")

const {
  dataSaldo,
  dataRiwayat,
  post,
  del,
  updateData,
  search,
} = require("../controllers/data")

router.post(
  "/post",
  [
    body("tanggal").isLength({ min: 8 }).withMessage("tanggal tidak valid"),
    body("saldo").isLength({ max: 15 }).withMessage("nominal tidak valid"),
  ],
  post
)

// router.get("/data/:blogId", databyId) // untuk mengambil 1 blog saja
router.get("/data/saldo", dataSaldo)
router.get("/data/riwayat", dataRiwayat)
router.get("/data/:id", search)
router.put("/data/:id", updateData)
router.delete("/data/:id", del)

module.exports = router
