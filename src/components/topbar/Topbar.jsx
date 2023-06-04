import { Mail, Person } from "@mui/icons-material";
import "./topbar.scss";


const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Sthav.dev</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+91-8197549029">+91 8197549029</a> </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:sthavidhr@gmail.com"> sthavidhr@gmail.com </a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;