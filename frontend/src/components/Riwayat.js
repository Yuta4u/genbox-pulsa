import { useState, useEffect } from "react"
import "../assets/css/App.css"
import CardRiwayat from "./_cardRiwayat"
import Navbar from "./_navbar"

const Riwayat = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5656/v1/data/riwayat")
      .then((res) => res.json())
      .then((res) => setData(res.data))
  }, [setData])

  return (
    <>
      <Navbar />

      <div className="riwayat">
        <div className="riwayat-judul">RIWAYAT</div>
        <div className="riwayat-content">
          <div className="riwayat-header">
            <div className="riwayat-nav">tanggal</div>
            <div className="riwayat-nav">tipe</div>
            <div className="riwayat-nav">nominal</div>
          </div>
          <div className="riwayat-isi">
            {data.map((e) => (
              <CardRiwayat props={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Riwayat
