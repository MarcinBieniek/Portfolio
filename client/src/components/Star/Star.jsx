import styles from './Star.module.scss';

const Star = () => {
  return (
    <img
      className={styles.icon}
      src={`${process.env.PUBLIC_URL}/images/star.svg`}
      alt="Main image"
    />
  )
}

export default Star
