import "./style.css"
import Logo from "../../assets/images/logo.png"
import { FaTwitter, FaInstagram, FaAlignRight } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si'
import { HashLink } from 'react-router-hash-link';
import { GiHamburgerMenu } from 'react-icons/gi'
import mlogo from "../../assets/images/mobile_logo.png"
import { useState } from 'react';


function Navbar() {
    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }
    return (<>
        <div className="nav_main_container">
            <div className='logo_container'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='list_container'>
                <ul>
                    <li><HashLink smooth to={"/#about"}>About</HashLink></li>
                    <li><HashLink smooth to={"/#roadmap"}>Roadmap</HashLink></li>
                    <li><HashLink smooth to={"/#team"}>Team</HashLink></li>
                </ul>
            </div>
            <div className="icon_container">
                <span onClick={() => window.open('https://discord.com/invite/grumpybeartownclub', '_blank')} >  <SiDiscord /> </span>
                <span onClick={() => window.open('https://twitter.com/GrumpyBearTC', '_blank')}> <FaTwitter /></span>
                <span onClick={() => window.open('https://www.instagram.com/grumpybeartownclub/', '_blank')}> <FaInstagram /> </span>
            </div>
            <div className="button_container">
                <button> CONNECT WALLET </button>
            </div>
        </div>
        <div className="navbar_mob_container">
            <div className="top_row">
                <div>
                    <img src={mlogo} />
                </div>

                <span className="" onClick={() => handleClick(toggle)} >
                    {toggle ? <FaAlignRight /> : <GiHamburgerMenu />}
                </span>
            </div>
            {toggle ?
                <div className="list_menu">
                    <ul>
                        <li><HashLink smooth to={"/#about"}>About</HashLink></li>
                        <li><HashLink smooth to={"/#roadmap"}>Roadmap</HashLink></li>
                        <li><HashLink smooth to={"/#team"}>Team</HashLink></li>
                        <li className="mob_icons">
                            <span onClick={() => window.open('https://discord.com/invite/grumpybeartownclub', '_blank')} >  <SiDiscord /> </span>
                            <span onClick={() => window.open('https://twitter.com/GrumpyBearTC', '_blank')}> <FaTwitter /></span>
                            <span onClick={() => window.open('https://www.instagram.com/grumpybeartownclub/', '_blank')}> <FaInstagram /> </span>
                        </li>
                    </ul>
                </div> :
                null}
        </div>


    </>
    )
}

export default Navbar;


// <div className='list_container'>
// <ul>
//     <li><HashLink smooth to={"/#about"}>About</HashLink></li>
//     <li><HashLink smooth to={"/#roadmap"}>Roadmap</HashLink></li>
//     <li><HashLink smooth to={"/#team"}>Team</HashLink></li>
// </ul>
// </div>
// <div className="icon_container">
// <span> <SiDiscord /> </span>
// <span> <FaTwitter /></span>
// <span> <FaInstagram /> </span>
// </div>