import './App.css';
import Cover from "./components/cover";
import Rarity from "./components/Rarity"
import Roadmap from './components/roadmap';
import Team from './components/team';
import Faq from "./components/faq"
import What_section from './components/what_section';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className='App'>
          <Cover />
          <What_section />
          <Rarity />
          <Roadmap />
          <Team />
          <Faq />
          <Footer />
        </div>
      </Switch>
    </Router>

  );
}

export default App;
