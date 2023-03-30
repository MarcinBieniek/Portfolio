import './styles/global.scss';
import styles from './App.module.scss';
import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact'; 
import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className={styles.sections}>
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
