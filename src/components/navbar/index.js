import "./style.css"
import Logo from "../../assets/images/logo.png" 
import {FaDiscord,FaTwitter,FaInstagram} from 'react-icons/fa'

function Navbar(){
    return(
        <div className="main_container">
            <div className ='logo_container'>
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
            <span> <FaDiscord/> </span>
            <span> <FaTwitter/></span>
            <span> <FaInstagram/> </span> 
            </div>
            <div className="button_container"> 
            <button> CONNECT WALLET </button>           
            </div>
        </div>
    )
}

export default Navbar;