import "./style.css"
import rubel from "../../assets/images/rubel.png"
import batrok from "../../assets/images/batrok.png"
import babaram from "../../assets/images/babaram.png"
import ggrol from "../../assets/images/ggrol.png"
import savin from "../../assets/images/savin.png"

function Team() {
    return (
        <div className="team_container">
            <div className="team_main_heading">
                <h1 className="theme_heading">Team</h1>
            </div>
            <div className="team_members">
                <div className="team_member_wrapper">
                    <img src={rubel} alt="rubel" />
                    <h3>@Rubel</h3>
                    <p>Administration</p>
                    <p>Development</p>
                </div>
                <div className="team_member_wrapper">
                    <img src={batrok} alt="batrok" />
                    <h3>@Batrok</h3>
                    <p>Administration</p>
                    <p>Development</p>
                </div>
                <div className="team_member_wrapper">
                    <img src={babaram} alt="babaram" />
                    <h3>@Babaram</h3>
                    <p>Marketing</p>
                </div>
                <div className="team_member_wrapper">
                    <img src={ggrol} alt="ggrol" />
                    <h3>@GGRol</h3>
                    <p>Sales</p>
                </div>
                <div className="team_member_wrapper">
                    <img src={savin} alt="savin" />
                    <h3>@SPPR</h3>
                    <p>Full Stack and</p>
                    <p>Blockchain</p>
                </div>
            </div>
        </div>
    )
}

export default Team;