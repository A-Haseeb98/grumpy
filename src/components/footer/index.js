import "./style.css"
import Logo from "../../assets/images/footer_logo.png"
import {FaTwitter, FaInstagram } from 'react-icons/fa'
import {SiDiscord} from 'react-icons/si'

function Footer() {
    return (
        <div className="footer_container">
            <div className='footer_logo_container'>
                <img src={Logo} alt='logo' />
            </div>
            <p> © 2021 Grumpy Bear Town Club, ALL RIGHTS RESERVED.</p>
            <div className="footer_icon_container">
                <span> <SiDiscord /> </span>
                <span> <FaTwitter /></span>
                <span> <FaInstagram /> </span>
            </div>
        </div>
    )
}

export default Footer; 