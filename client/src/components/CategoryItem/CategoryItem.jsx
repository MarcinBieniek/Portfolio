import styles from './CategoryItem.module.scss'
import clsx from 'clsx';

const CategoryItem = ({id, title, active, setSelected}) => {
  return (
    <li 
      className={clsx(styles.item, active && styles.active )}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}

export default CategoryItem
