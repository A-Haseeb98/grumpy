import "./style.css" 
import bear3 from "../../assets/images/bear3.png"

function What_section(){
    return(
        <div className="main_cont">
            <div>
                <h1 className="theme_heading">WHAT THE FUCK IS THIS?</h1>
            </div>
            <div className="sec_main">
                <div className="text_cont">
                    <p>
                    Grumpy Bear Town Club are 10’000 unique and randomly generated NFTs based on the Ethereum blockchain. All bears live in the same town called Grumpy Bear Town. Although all bears are grumpy, they have individual external characteristics.
                    </p>
                </div>
                <div className="picture_cont">
                    <img src={bear3} alt="bear"/>
                </div>
            </div>
        </div>
    )
}

export default What_section;