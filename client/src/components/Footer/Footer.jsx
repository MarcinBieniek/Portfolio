import styles from './Footer.module.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span>Design © by Portfolio Template & Flowbase.</span><br/>
          <span>Coded in React by Marcin.</span>
        </div>
        <div className={styles.right}>
          <a href="https://www.linkedin.com/in/marcin-bieniek-617565271">
            <LinkedInIcon className={styles.icon}/>
          </a>
          <a href="https://github.com/MarcinBieniek?tab=repositories">
            <GitHubIcon className={styles.icon}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
