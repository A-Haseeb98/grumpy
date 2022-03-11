import "./style.css"
import bear3 from "../../assets/images/bear3.png"

function What_section() {
    return (
        <div className="what_main_cont" id="about">

                <div>
                    <h1 className="theme_heading">WHAT THE FUCK IS THIS?</h1>
                </div>
                <div className="sec_main">
                    <div className="sec_text_cont">
                        <p>
                        The story behind Grumpy Bear Town goes back a few years. The first "old" Grumpy Bear in town was just an ordinary bear. This naked bear without clothes and accessories exists only once in the NFT collection. After the town was founded, Grumpy Bear Town developed into a diverse town with many bears. All his offspring are diverse and have different traits. There are bears that are common and bears that are very rare. In addition, there is a ultra rare bear, which visits our collection from the future universe!
                        </p>
                    </div>
                    <div className="picture_cont">
                        <img src={bear3} alt="bear" />
                    </div>
                </div>
            </div>
    )
}

export default What_section;