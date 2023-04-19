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
              <p>I had an experience as Project Manager on IT projects (new online service for the <a href="https://pzpn.pl/" target="_blank">Polish National Football Federation</a>). I worked also as a copywriter, specialized in SEO.</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>In January 2023, I've completed 10-month Full Stack Developer course on Kodilla. I went through the basics of JavaScript, React, NodeJS, Express, Mongo/SQL. </p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>I've completed three final projects. One of them was an e-commerce group project, lead by PM in Kanban methodology, with all aspects of commercial programing. </p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Each week, I met 1:1 with my mentor for an hour of code review and pair programming. </p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Today I'm focused on developing my skills. In April 2023 I've started Vue Masterclass on vueschool.io. I'm also taking first steps in React Native.</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Currently im working on my first commercial project - lessons booking app for online school. Below you can find more details.</p>    
            </li>
          </ul>
          
          <div className={styles.buttons}>
            <a href="https://www.linkedin.com/in/marcin-bieniek-617565271" className={styles.button} target="_blank">
              <LinkedInIcon className={styles.icon}/>
              <span>See my profile</span>
            </a>

            <div className={styles.button_alt}>
              <CloudDownloadIcon />
              <span>Resume:</span>
              <div className={styles.languages}>
                <a href={`${process.env.PUBLIC_URL}/images/resume/CV-MarcinBieniek-en.pdf`}  download="MarcinBieniekCV">ENG</a>
                <a href={`${process.env.PUBLIC_URL}/images/resume/CV-MarcinBieniek-pl.pdf`}  download="MarcinBieniekCV">PL</a>
              </div>
            </div>  

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
