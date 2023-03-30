import styles from './Intro.module.scss';
import TerminalIcon from '@mui/icons-material/Terminal';

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
        
        <span>A junior web</span> 
        <TerminalIcon className={styles.icon}/>
        <span className={styles.gray}>developer</span><br />

        <span className={styles.gray}>specialized</span>
        <img 
          className={styles.logo}
          src={`${process.env.PUBLIC_URL}/images/mern.png`} 
          alt="Mern logo"
        />
        <span> in Mern Stack</span><br />

      </div>
      <div className={styles.buttons}>
        <a href="#about" className={styles.button1}>
          <div >About me</div>
        </a>
        <a href="#portfolio" className={styles.button2}>
          <div>My portfolio</div>
        </a>
      </div>
    </div>
  )
}

export default Intro
