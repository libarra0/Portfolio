import "./Topbar.scss"
import Image from "../../images/logo.png"
import {Phone, Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><img src={Image}/></a>
                    <div className="itemContainer">
                        <Phone className="icon"/>
                        <span>+52 312 142 2808</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>ibarrapalacios@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}