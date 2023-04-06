import styles from './Relax.module.scss'

const Relax = () => {
  return (
    <div className={styles.relax} id="relax">
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={`${process.env.PUBLIC_URL}/images/sun.svg`} 
          alt="Main image"
        />
        <h1>Relax</h1>
      </div>
    
      <div className={styles.wrapper}>
          
        <div className={styles.left}>
          <h1>Thank You</h1>
          <p>For taking Your time and checking out my projects. At the end I'd like to share with You the playlist I usually play when I'm working. I'm a big music fan, <a href="https://www.instagram.com/marcinbieniek_vinyl/" target="_blank">I own around 400 records</a>, I love concerts.</p>
          <p>Here is the selection of my favourite chillpop/jazz tracks. Best solution when you need to stay focused.</p>
        </div>
        <div className={styles.right}>
          <iframe src="https://open.spotify.com/embed/playlist/7nadnxdJGXVyIfk8P2Ko2o?utm_source=generator" width="90%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        
      </div>
    </div>
  )
}

export default Relax
