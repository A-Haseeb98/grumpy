import "./style.css"
import watch from "../../assets/images/watch.png"

function Roadmap() {
    return (
        <div className="roadmap_container">
            <div className="sub_roadmap_container">
                <div className="mainhead">
                    <h1 className="theme_heading">ROADMAP</h1>
                </div>
                <div className="watch_container">
                    <div className="watch_wrapper">
                        <img src={watch} alt="watch" />
                    </div>
                    <div className="sec_head">
                        <h2>Important Notice!</h2>
                        <p>There is one Grumpy Bear with a Rolex GMT-Master 2 Pepsi. The one who  mints this NFT will be rewarded with an original one worth around 30’000 USD!</p>
                    </div>
                </div>
                <div className="roadmap_steps_wrapper">
                    
                    <div className="step_container">
                        <div className="road_num">
                            <h1>10%</h1>
                        </div>
                        <div className="road_p">
                            <p>Giveaway of 10 NFT’s for the most active discord and instagram users</p>
                        </div>
                    </div>
                    <div className="step_container">
                        <div className="road_num">
                            <h1>25%</h1>
                        </div>
                        <div className="road_p">
                            <p>Airdrop 20 NFT’s to random twenty holders</p>
                        </div>
                    </div>
                    <div className="step_container">
                        <div className="road_num">
                            <h1>50%</h1>
                        </div>
                        <div className="road_p">
                            <p>Investors will choose charity. 25k USD will be donated to two projects. The community will choose between five different social and environmental projects on discord</p>
                        </div>
                    </div>
                    <div className="step_container">
                        <div className="road_num">
                            <h1>75%</h1>
                        </div>
                        <div className="road_p">
                            <p>We will launch our own grumpy bear town club merchandising.</p>
                        </div>
                    </div>
                    <div className="step_container">
                        <div className="road_num">
                            <h1>100%</h1>
                        </div>
                        <div className="road_p">
                            <p>We are sold out ! We will announce a huge giveaway for one random holder (approximatly worth 100’000 USD)</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Roadmap;