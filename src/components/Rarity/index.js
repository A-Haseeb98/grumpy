import "./style.css"

function Rarity() {
    return (
        <div className="rarity_container">
            <div>
                <h1 className="theme_heading">RARITY</h1>
            </div>
            <div className="main_sec">
                <div className="rarity_wrapper">
                    <h2>STATS</h2>
                    <p>
                        <span className="blue_col">Mint Prices: </span>
                        <span className="white_col">
                            1 - 2,500 NFT’s will be sold at 0.1 ETH <br />
                            2,501 - 5,000 NFT’s will be sold at 0.2 ETH <br />
                            5,001 - 10,000 NFT’s will be sold at 0.25 ETH <br />
                        </span>
                    </p>
                    <p>
                        <span className="blue_col">Max. mint amount per wallet: </span>
                        <span className="white_col">100</span>
                    </p>
                    <p>
                        <span className="blue_col">Maxim. Min amount whitelist: </span>
                        <span className="white_col">3000</span>
                    </p>
                    <p>
                        <span className="blue_col">Token name: </span>
                        <span className="white_col">GBTC</span>
                    </p>
                </div>
                <div className="traits">
                    <h2>TRAITS</h2>
                    <p><span className="blue_col">Outfits</span><span className="white_col">19</span></p>
                    <p><span className="blue_col">Shoes</span><span className="white_col">10</span></p>
                    <p><span className="blue_col">Jewellery</span><span className="white_col">08</span></p>
                    <p><span className="blue_col">Headwear/sunglasses</span><span className="white_col">08</span></p>
                    <p><span className="blue_col">Items</span><span className="white_col">08</span></p>
                    <p><span className="blue_col">Backgrounds</span><span className="white_col">06</span></p>
                </div>
            </div>
        </div>
    )
}

export default Rarity;