const cardRiwayat = ({ props }) => {
  return (
    <div className="card">
      <div className="isi">{props.tanggal}</div>
      <div className="isi">{props.tipe}</div>
      <div className="isi">{props.nominal}</div>
    </div>
  )
}

export default cardRiwayat
