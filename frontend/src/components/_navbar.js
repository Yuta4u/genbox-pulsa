import NavbarEye from "../assets/img/navbar-eye.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/home" className="n-img">
        <img src={NavbarEye} className="img-eye" />
      </Link>
      <div className="navbar-child">
        <Link to="/home/topup" className="n-topup">
          TOPUP
        </Link>
        <Link to="/home/jual" className="n-jual ">
          JUAL
        </Link>
        <Link to="/home/riwayat" className="n-riwayat ">
          RIWAYAT
        </Link>
      </div>
    </div>
  )
}

export default Navbar
