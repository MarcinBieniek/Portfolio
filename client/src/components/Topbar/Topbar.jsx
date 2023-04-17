import styles from './Topbar.module.scss';
import EmailIcon from '@mui/icons-material/Email';
import clsx from 'clsx';

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={clsx(styles.container, menuOpen && styles.active)}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="#intro">Marcin.</a>
        </div>
        <div className={styles.center}>
          <EmailIcon />
          <a href="mailto:mbieniek.dev@gmail.com">mbieniek.dev@gmail.com</a>
        </div>
        <div className={styles.right}>
          <div className={styles.hamburger} onClick={()=>setMenuOpen(!menuOpen)}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
