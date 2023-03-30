import styles from './Menu.module.scss';
import clsx from 'clsx';

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={clsx(styles.menu, menuOpen && styles.active)}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
