import { useState, useEffect } from "react"
import Navbar from "./_navbar"

const Jual = () => {
  const [tanggal, setTanggal] = useState("")
  const [provider, setProvider] = useState("")
  const [nominal, setNominal] = useState("")
  const [nomorhp, setNomorhp] = useState("")
  const [saldo, setSaldo] = useState([]) // ===============> TABLE SALDO VARIABLE
  // ======================> GET DATA SALDO
  useEffect(() => {
    fetch("http://localhost:5656/v1/data/saldo")
      .then((res) => res.json())
      .then((res) => setSaldo(res.data[0].saldo))
  }, [setSaldo])
  // ===================> POST RIWAYAT <=======================
  const postRiwayat = () => {
    let formData = new FormData()
    formData.append("tanggal", tanggal)
    formData.append("tipe", "jual")
    formData.append("nominal", nominal) // =====> DATA BARU SQL YANG AKAN KITA TIMPA
    fetch("http://localhost:5656/v1/post", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => alert(`Penjualan pulsa ${nominal} BERHASIL!!`))
  }
  console.log(saldo)
  // ==================> UPDATE SALDO <=======================
  const updateSaldo = () => {
    let formDatas = new FormData()
    formDatas.append("saldo", saldo - Number(nominal))
    fetch("http://localhost:5656/v1/data/1", {
      method: "PUT",
      body: formDatas,
    })
      .then((res) => res.json())
      .then((res) => console.log("Berhasil! YEAY!!"))
  }
  return (
    <div className="form-jual">
      <Navbar />
      <div className="form-jual-child">
        <input
          placeholder="tanggal.."
          type="text"
          onChange={(e) => setTanggal(e.target.value)}
        />

        <select
          className="jual-provider"
          type="text"
          onChange={(e) => setProvider(e.target.value)}
        >
          <option value="telkomsel">telkomsel</option>
          <option value="xl">xl</option>
          <option value="axis">axis</option>
        </select>
        <select
          className="jual-nominal"
          type="text"
          onChange={(e) => setNominal(e.target.value)}
        >
          <option value="5000">Rp5.000</option>
          <option value="10000">Rp10.000</option>
          <option value="25000">Rp25.000</option>
          <option value="50000">Rp50.000</option>
          <option value="100000">Rp100.000</option>
        </select>
        <input
          placeholder="nomor hp.."
          type="text"
          onChange={(e) => setNomorhp(e.target.value)}
        />
        <button onClick={() => (postRiwayat(), updateSaldo())}>submit</button>
      </div>
    </div>
  )
}

export default Jual
