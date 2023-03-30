import styles from './Menu.module.scss';
import clsx from 'clsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={clsx(styles.menu, menuOpen && styles.active)}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
          <span>01</span>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
          <span>02</span>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
          <span>03</span>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
          <span>04</span>
        </li>
      </ul>
      <div className={styles.icons}>
        <a href="https://www.linkiedin.com">
          <LinkedInIcon className={styles.icon}/>
        </a>
        <a href="https://www.github.com">
          <GitHubIcon className={styles.icon}/>
        </a>
      </div>
    </div>
  )
}

export default Menu
