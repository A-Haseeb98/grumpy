import "./style.css"
import Logo from "../../assets/images/footer_logo.png"
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'

function Footer() {
    return (
        <div className="footer_container">
            <div className='footer_logo_container'>
                <img src={Logo} alt='logo' />
            </div>
            <p> © 2021 Grumpy Bear Town Club, ALL RIGHTS RESERVED.</p>
            <div className="footer_icon_container">
                <span onClick={() => window.open('https://discord.com/invite/grumpybeartownclub', '_blank')} >  <SiDiscord /> </span>
                <span onClick={() => window.open('https://twitter.com/GrumpyBearTC', '_blank')}> <FaTwitter /></span>
                <span onClick={() => window.open('https://www.instagram.com/grumpybeartownclub/', '_blank')}> <FaInstagram /> </span>

            </div>
        </div>
    )
}

export default Footer; 