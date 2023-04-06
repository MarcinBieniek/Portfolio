import styles from './About.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
              <p>In 2021, I've decided to create a personalized e-commerce service from scratch.</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Before that I had an experience as PM on big IT projects (a new corporate service for the <a href="https://pzpn.pl/" target="_blank">Polish National Football Federation).</a></p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>In February 2023, I've completed an intense 10-month Full Stack Developer bootcamp. I went through the basics of JavaScript, React, NodeJS, Express, Mongo/SQL, and TypeScript. </p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>I've completed three final projects. One of them was an e-commerce group project. We've learned how to work as a team, plan work in Jira, and make code reviews/merge changes in Git.</p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Each week, I met with my mentor for an hour of code review and pair programming. </p>    
            </li>
            <li>
              <img
                className={styles.icon}
                src={`${process.env.PUBLIC_URL}/images/star.svg`} 
                alt="Main image"
              />
              <p>Today I'm focused on developing my skills. There is so much to learn and discover.</p>    
            </li>
          </ul>
          
          <div className={styles.buttons}>
            <a href="https://www.linkedin.com/in/marcin-bieniek-617565271" className={styles.button} target="_blank">
              <LinkedInIcon className={styles.icon}/>
              <span>See my profile</span>
            </a>

            <a href={`${process.env.PUBLIC_URL}/images/resume/cv.pdf`} className={styles.button_alt} download="MarcinBieniekCV">
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
