import './App.css';
import Navbar from './components/navbar';
import Cover from "./components/cover";
import Rarity from "./components/Rarity"
import Roadmap from './components/roadmap';
import Team from './components/team';
import Faq from "./components/faq"
import What_section from './components/what_section';

function App() {
  return (
    <div>
       <Navbar/>
       <Cover/>
       <What_section/>
       <Rarity/>
       <Roadmap/>
       <Team/>
       <Faq/>
    </div>
  );
}

export default App;
