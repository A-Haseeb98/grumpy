import "./style.css"
import bear1 from "../../assets/images/bear1.png"
import bear2 from "../../assets/images/bear2.png"
import logo from "../../assets/images/cover_center.png"
import Navbar from '../navbar/index'
function Cover() {
    return (

        <div className='cover_container'>
            <div>
                <Navbar />
            </div>
            <div className="sub_container">
                <div className="image_1">
                    <img src={bear2} alt="bear" />
                </div>
                <div className="text_center_container">
                    <img src={logo} alt="logo" />
                    <p>0 / 10,000 Mints</p>
                    <div className="input_container">
                        <span className="minus_button">-</span>
                        <span className="no_button">01</span>
                        <span className="plus_button">+</span>
                    </div>
                    <button className="btn_container">MINT NOW</button>
                </div>
                <div className="image_2">
                    <img src={bear1} alt="bear" />
                </div>
            </div>
        </div>
    )
}

export default Cover;