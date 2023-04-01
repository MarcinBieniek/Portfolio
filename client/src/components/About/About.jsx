import styles from './About.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const About = () => {
  
  return (
    <div className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.claim}>
            <h1 className={styles.lead}>I develop my skills in frontend & backend technologies.</h1>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>W 2021 roku postanowiłem od podstaw stworzyć spersonalizowany sklep internetowy. To był początek nowej drogi na której jestem teraz.</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>W grudniu 2022 roku ukończyłem intensywny 9-miesięczny bootcamp Full Stack Developer (900 godzin). Główne technologie to JavaScript, React, NodeJS, Express, MongoDB, Typescript, MySQL.
</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Ukończyłem także 3 duże projekty zaliczeniowe, w tym projekt grupowy w ramach którego przez miesiąc tworzyliśmy serwis e-commerce, planując pracę w JIRA i pracując zespołowo w GITcie ( wykonując code review i mergując).</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Mam doświadczenie jako PM przy duzych projektach IT (nowy korporacyjny serwis dla PZPN).</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Dziś jestem skoncentrowany na rozwijaniu moich umiejętności i znalezieniu pracy jako web developer. To dopiero początek, jest tak wiele do nauczenia.</p>    
            </li>
          </ul>
          
          <div className={styles.buttons}>
            <a href="https://www.linkedin.com" className={styles.button}>
              <LinkedInIcon className={styles.icon}/>
              <span>See my profile</span>
            </a>

            <a href="https://www.linkedin.com" className={styles.button_alt}>
              <CloudDownloadIcon className={styles.icon}/>
              <span>Download resume</span>
            </a>  

            <a href="#portfolio" className={styles.button}>
              <RemoveRedEyeIcon className={styles.icon}/>
              <span>See my works</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
