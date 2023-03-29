import './styles/global.scss';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'; 

function App() {
  return (
    <div className="App">
      <Topbar />
      <div>
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
