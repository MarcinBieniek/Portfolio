import styles from './Portfolio.module.scss';
import { categories } from '../../data/simpleData';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useEffect, useState } from 'react';
import { portfolio } from '../../data/simpleData';

const Portfolio = () => {

  const [selected, setSelected] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    setFilteredProjects(
      portfolio.filter(project => project.tag.includes(selected))
    )
  }, [selected])

  return (
    <div className={styles.portfolio} id="portfolio">
      <div className={styles.header}>
        <img
          className={styles.icon}
          src={`${process.env.PUBLIC_URL}/images/sun.svg`}
          alt="Main image"
        />
        <h1>Portfolio</h1>

        <ul className={styles.categories}>
          {categories.map((item) => (
            <CategoryItem
              id={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          ))}
        </ul>
      </div>

      <div className={styles.list}>
        { filteredProjects.map((item) => (
          <div className={styles.project}>

            {item.link ?
              <a href={item.link} className={styles.image} target="_blank">
                <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="" />
                  <p>Live demo</p>

              </a>
            :
              <a href={item.github} className={styles.image} target="_blank">
              <img src={`${process.env.PUBLIC_URL}${item.img}`} alt="" />
                <p>Go to Github</p>
              </a>
            }

            <div className={styles.content}>

              <div className={styles.buttons}>
                { item.tag.includes('react') &&
                  <div className={styles.react_button}>
                    <span>React</span>
                  </div>
                }
                { item.tag.includes('vue') &&
                  <div className={styles.vue_button}>
                    <span>Vue</span>
                  </div>
                }
                { item.tag.includes('nextjs') &&
                  <div className={styles.nextjs_button}>
                    <span>Next.js</span>
                  </div>
                }
                { item.tag.includes('nuxtjs') &&
                  <div className={styles.nuxtjs_button}>
                    <span>Nuxt.js</span>
                  </div>
                }
                { item.tag.includes('vanillajs') &&
                  <div className={styles.javascript_button}>
                    <span>VanillaJS</span>
                  </div>
                }
                { item.tag.includes('full-stack') &&
                  <div className={styles.bootstrap_button}>
                    <span>Full-stack</span>
                  </div>
                }
                { item.tag.includes('typescript') &&
                  <div className={styles.typescript_button}>
                    <span>TypeScript</span>
                  </div>
                }
                { item.tag.includes('tailwind') &&
                  <div className={styles.tailwind_button}>
                    <span>TailwindCSS</span>
                  </div>
                }
              </div>
              <h3>{item.title}</h3>
              <p><b>Created:</b> {item.created}</p>
              <p><b>Details:</b> {item.details}</p>

            </div>



            <div className={styles.summary}>
                {item.link &&
                  <a href={item.link} className={styles.button} target="_blank">
                    <span>Live demo</span>
                  </a>
                }
                <a href={item.github} className={styles.button} target="_blank">
                  <span>Github</span>
                </a>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
