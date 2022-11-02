import "../assets/css/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Topup from "../components/Topup"
import Jual from "../components/Jual"
import Riwayat from "../components/Riwayat"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/topup" element={<Topup />}></Route>
        <Route path="/home/jual" element={<Jual />}></Route>
        <Route path="/home/riwayat" element={<Riwayat />}></Route>
      </Routes>
    </Router>
  )
}

export default App
