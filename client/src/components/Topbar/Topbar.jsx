import styles from './Topbar.module.scss';
import EmailIcon from '@mui/icons-material/Email';

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro">Marcin.</a>
        </div>
        <div className={styles.center}>
          <EmailIcon />
          <a href="mailto:hello@marcindev.com">hello@marcindev.com</a>
        </div>
        <div className={styles.rigth}>
          <div className={styles.hamburger}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
