import "../assets/css/App.css"
import Profile from "../assets/img/profile.jfif"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./_navbar"

const Home = () => {
  const [saldo, setSaldo] = useState([])
  useEffect(() => {
    fetch("http://localhost:5656/v1/data/saldo")
      .then((res) => res.json())
      .then((res) => setSaldo(res.data[0]))
  }, [setSaldo])
  return (
    <div className="home">
      {/* <div className="home-judul">GENBOX PULSA</div> */}
      <Navbar />
      <div className="home-profile">
        <div className="home-image">
          <img src={Profile} className="img-profile" />
        </div>
        <div className="home-data">
          <div className="home-owner">Admin</div>
          <hr className="home-hr"></hr>
          <div className="home-saldo">Rp {saldo.saldo}</div>
        </div>
      </div>
    </div>
  )
}

export default Home
