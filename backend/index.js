const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const port = 5656
const app = express()
const multer = require("multer")

app.use(cors()) // untuk menangani cors
app.use(bodyParser.json()) // untuk memparser json body
const dataRoutes = require("./src/routes/data") // untuk menampung, dan mengisi di url pokemon

app.use(multer({}).single("none"))

app.use("/v1", dataRoutes)

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500
  const message = error.message
  const data = error.data

  res.status(status).json({ message, data })
})

app.listen(port, () => {
  console.log("server berjalan:)")
})

// mongoose
//   .connect(
//     `mongodb+srv://yuta:admin123@cluster0.bmuqj7a.mongodb.net/?retryWrites=true&w=majority`
//   )
//   .then((res) => {
//     app.listen(port, () => console.log(`server running on port ${port}`))
//   })
//   .catch((err) => console.log(err))
