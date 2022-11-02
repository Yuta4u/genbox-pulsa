import { useState, useEffect } from "react"
import "../assets/css/App.css"
import Navbar from "./_navbar"

const Topup = ({ props }) => {
  const [tanggal, setTanggal] = useState("") // INPUTAN
  const [saldo, setSaldo] = useState("") // INPUTAN
  const [profile, setProfile] = useState([]) // DATABASE SALDO mysql

  // mengambil DATABASE SALDO mysql
  useEffect(() => {
    fetch("http://localhost:5656/v1/data/saldo")
      .then((res) => res.json())
      .then((res) => setProfile(res.data[0]))
  }, [setProfile])

  // MENIMPA SALDO
  const updateSaldo = () => {
    let formDatas = new FormData() // FORM DATA BARU
    formDatas.append("saldo", profile.saldo + Number(saldo)) // UPDATE SALDO
    fetch("http://localhost:5656/v1/data/1", {
      method: "PUT",
      body: formDatas, // KITA TIMPA SAMA NILAI BARU
    })
      .then((res) => res.json())
      .then((res) => alert(res.message))
  }

  // POST KE RIWAYAT
  const postRiwayat = () => {
    let formData = new FormData() // KITA BUAT FORM DATA BARU
    formData.append("tanggal", tanggal) // ISI
    formData.append("tipe", "topup") // ISI
    formData.append("nominal", saldo) // ISI
    fetch("http://localhost:5656/v1/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => alert("input tidak valid"))
  }
  return (
    <div className="topup">
      <Navbar />
      <input
        placeholder="tanggal"
        type="text"
        onChange={(e) => setTanggal(e.target.value)}
      />
      <input
        placeholder="saldo"
        type="text"
        onChange={(e) => setSaldo(e.target.value)}
      />
      <button
        onClick={() =>
          tanggal.length >= 8 && saldo.length >= 4
            ? (updateSaldo(), postRiwayat())
            : alert("input tidak valid")
        }
      >
        submit
      </button>
    </div>
  )
}

export default Topup
