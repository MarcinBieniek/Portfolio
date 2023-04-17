import styles from './Intro.module.scss';
import TerminalIcon from '@mui/icons-material/Terminal';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Intro = () => {
  return (
    <div className={styles.intro} id="intro">
      <div className={styles.text}>
        <span className={styles.gray}>I'm Marcin</span>
        <img
          className={styles.foto}
          src={`${process.env.PUBLIC_URL}/images/marcin.jpeg`} 
          alt="Main image"
        />
        <span>Bieniek</span><br/>
        
        <span>A junior </span> 
                <img 
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/images/mern.png`} 
          alt="Mern logo"
        />
        
        <span className={styles.gray}>MERN stack</span><br />

        <span className={styles.gray}>web</span>
        <TerminalIcon className={styles.icon}/>
        <span> developer</span><br />
      </div>
      
      <div className={styles.buttons}>
        <a href="#about" className={styles.button1}>
          <div >About me</div>
        </a>
        <a href="#portfolio" className={styles.button2}>
          <div>My portfolio</div>
        </a>
      </div>

      <div className={styles.arrow}>
        <a href="#about">
          <ExpandMoreIcon className={styles.icon} />
        </a>
      </div>
    </div>
  )
}

export default Intro
