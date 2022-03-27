import Cover from "../components/cover";
import Rarity from "../components/Rarity"
import Roadmap from '../components/roadmap';
import Team from '../components/team';
import Faq from "../components/faq"
import What_section from '../components/what_section';
import Footer from '../components/footer';


function Home() {
    return (
        <div className='App'>
            <Cover />
            <What_section />
            <Rarity />
            <Roadmap />
            <Team />
            <Faq />
            <Footer />
        </div>
    );
}

export default Home;