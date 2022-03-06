import "./style.css"
import Logo from "../../assets/images/logo.png"
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { SiDiscord} from 'react-icons/si'


function Navbar() {
    return (
        <div className="nav_main_container">
            <div className='logo_container'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='list_container'>
                <ul>
                    <li>About</li>
                    <li>Roadmap</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="icon_container">
                <span> <SiDiscord /> </span>
                <span> <FaTwitter /></span>
                <span> <FaInstagram /> </span>
            </div>
            <div className="button_container">
                <button> CONNECT WALLET </button>
            </div>
        </div>
    )
}

export default Navbar;