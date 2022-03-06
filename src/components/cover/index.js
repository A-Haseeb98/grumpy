import "./style.css"
import bear1 from "../../assets/images/bear1.png"
import bear2 from "../../assets/images/bear2.png"
import logo from "../../assets/images/logo.png"

function Cover(){
    return(
        <div>
            <div className="image_1"> 
            <img src={bear1} alt="bear"/>
            </div>
            <div className="text_container">  
            <img src={logo} alt="logo"/>
            <p>0 / 10,000 Mints</p>
            <button> 01 </button>
            <button>MINT NOW</button>
            </div>
            <div className="image_2"> 
            <img src={bear2} alt="bear"/>
            </div>
        </div>
    )
}

export default Cover;