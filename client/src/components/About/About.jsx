import styles from './About.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Star from '../Star/Star';

const About = () => {

  return (
    <div className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.claim}>
            <h1 className={styles.lead}>My skills:</h1>
            <p><b>Vue:</b> Nuxt.js 3, Vue 2 & 3, Pinia, VueUse, TypeScript</p>
            <p><b>React:</b> Next.js, Redux, ContexAPI, TypeScript</p>
            <p><b>Style:</b> CSS, SCSS, Tailwind, libraries (MaterialUI, SemanticUI, Bootstrap, AnimateCSS and more)</p>
            <p><b>Backend:</b> NodeJS, Express, MongoDB, MySQL, REST API, Grafbase</p>
            <p><b>Others:</b> Git (conventional commits), Bitbucket, Jira, Cloudinary, Netlify, Heroku, Vercel, Postman</p>
          </div>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <Star />
              <p>Since May 2023, I have been working as a junior front-end developer for VIIA Studio. I create projects based on Vue and Nuxt 3.</p>
            </li>
            <li>
              <Star />
              <p>Since February 2023, I have been developing skills in Vue, Nuxt and TypeScript by completing
                <a href="https://vueschool.io/" target="_blank"> vueschool.io </a>
                courses. I've also finished the
                <a href="https://masteringnuxt.com/" target="_blank"> Mastering Nuxt 3 course</a>
                <a href={`${process.env.PUBLIC_URL}/images/certificates/nuxt.pdf`} target="_blank"> (certificate)</a>.
              </p>
            </li>
            <li>
              <Star />
              <p>Between 02/2022 - 12/2022 I participated in a 10-month
                <a href="https://kodilla.com/" target="_blank"> Full Stack Developer bootcamp </a>
                , during which I created 3 large projects using JavaScript, React and NodeJS
                <a href={`${process.env.PUBLIC_URL}/images/certificates/kodilla.pdf`} target="_blank"> (certificate)</a>.
              </p>
            </li>
            <li>
              <Star />
              <p>During that course, each week, I met 1:1 with mentor for an hour of code review and pair programming. One of projetcs was an e-commerce group project, led by PM in Kanban methodology, with all aspects of commercial programming. </p>
            </li>
            <li>
              <Star />
              <p>Today I'm focused on developing my skills in TypeScript, React Next and Vue Nuxt.</p>
            </li>
            <li>
              <Star />
              <p>I had experience as a project manager on IT projects
                <a href="https://pzpn.pl/" target="_blank"> (new online service for the Polish National Football Federation)</a>.
                I also worked as a copywriter (polish and english languge).</p>
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
                <a href={`${process.env.PUBLIC_URL}/images/resume/Marcin-Bieniek-CV-eng-102023.pdf`}  download="MarcinBieniekCV">ENG</a>
                <a href={`${process.env.PUBLIC_URL}/images/resume/Marcin-Bieniek-CV-pl-102023.pdf`}  download="MarcinBieniekCV">PL</a>
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
