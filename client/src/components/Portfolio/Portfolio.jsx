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
                { item.tag.includes('nodejs') &&
                  <div className={styles.nodejs_button}>
                    <span>NodeJS</span>
                  </div>
                }
                { item.tag.includes('express') &&
                  <div className={styles.express_button}>
                    <span>Express</span>
                  </div>
                }
                { item.tag.includes('mongodb') &&
                  <div className={styles.mongodb_button}>
                    <span>MongoDB</span>
                  </div>
                }
                { item.tag.includes('javascript') &&
                  <div className={styles.javascript_button}>
                    <span>JavaScript</span>
                  </div>
                }
                { item.tag.includes('bootstrap') &&
                  <div className={styles.bootstrap_button}>
                    <span>Bootstrap</span>
                  </div>
                }
                { item.tag.includes('mysql') &&
                  <div className={styles.mysql_button}>
                    <span>MySQL</span>
                  </div>
                }
              </div>
              <h3>{item.title}</h3>
              <p><b>Details:</b> {item.details}</p>
              
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
