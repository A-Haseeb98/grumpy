import "./style.css"
import {FaDiscord,FaTwitter,FaInstagram} from 'react-icons/fa'

function Faq(){
    return(
        <div>
            <div><h1 className="theme_heading">FAQS</h1></div>
            <div>
                <div>
                    <h3>What is the Grumpy Bear Town Club?</h3>
                    <p>Grumpy Bear Town Club is a collection of 10,000 unique NFTs living in bearish town on the ETH block chain. The Project is inspired by our love for bears and NFTs.</p>
                </div>
                <div>
                    <h3>How much does a Grumpy Bear cost?</h3>
                    <p>The Grumpy Bear Town Club will begin at 0.1 ETH + Gas Fee for the first 2’500 pieces. Afterwards the price rise to 0.2 and later to 0.25 ETH + Gas Fee for the pieces between 2’001 – 5’000, and respectively 5’001 – 10’000.</p>
                </div>
                <div>
                    <h3>When its the minting date?</h3>
                    <p>The mint date will be X. Minting will go live at 19:00 UTC. The total supply will be 10’000 Grumpy Bears.</p>
                </div>
                <div>
                    <h3>Will there be a presale?</h3>
                    <p>Of course! Stage 1 «PIONEER GRUMPY BEARS» We will host a presale event “stage 1- Pioneer Grumpy Bears”, starting XX. The presale will last XX hours and be accessible to ONLY WHITELISTED •MEMBERS!. This will last X hours and will BE ACCESIBLE just for WHITLISTED MEMBERS.</p>
                </div>
                <div>
                    <h3>How do I get on the whitelist?</h3>
                    <p>We want to be fair and compensate both early adopters and engaged members. There will be several ways to get whitelisted to be fair. Join our Discord to find out how.</p>
                </div>
                <div>
                    <h3>How can I buy a Grumpy Bear Town Club ?</h3>
                    <ol>
                        <li>
                        Download the metamask.io extension to your browser
                        </li>
                        <li>Purchase Ethereum from various exchanges, such as Coinbase or Binance</li>
                        <li>Send Ethereum from this exchange to your MetaMask wallet </li>
                        <li>When it is time to mint, open the Grumpy Bear Town Club website and select the number of NFTs you wish to purchase </li>
                        <li>Click «Mint» button, Metamask will popup asking for connection</li>
                        <li>Confirm the transaction and any associated fees</li>
                        <li>Once you have made your purchase, your NFTs will appear in you wallet and on OpenSea</li>
                    </ol>
                </div>
            </div>
            <div>
                <h1>STILL HAVE QUESTIONS ?</h1>
                <p>Head to our Discord to learn more and ask any questions</p>
                <span> <FaDiscord/> </span>
            </div>
        </div>
    )
}

export default Faq;