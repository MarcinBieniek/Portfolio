import './styles/global.scss';
import styles from './App.module.scss';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'; 
import { useState } from 'react';
import Menu from './components/Menu/Menu';
import About from './components/About/About';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className={styles.sections}>
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
