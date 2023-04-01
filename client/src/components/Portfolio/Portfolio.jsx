import styles from './Portfolio.module.scss';
import { categories } from '../../data/simpleData';
import CategoryItem from '../CategoryItem/CategoryItem';
import { useEffect, useState } from 'react';
import { portfolio } from '../../data/simpleData';

const Portfolio = () => {

  const [selected, setSelected] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState('')

  console.log('selected is ', selected)
  console.log(filteredProjects)

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

      <div className={styles.item}>
        <div className={styles.image}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/portfolio/prospero.png`} 
            alt="Prospero Store"
          />
          <h3>View in browser</h3>
        </div>
        <div className={styles.description}>
          <div className={styles.buttons}>
            <div className={styles.react_button}>
              <span>React</span>
            </div>
            <div className={styles.nodejs_button}>
              <span>NodeJS</span>
            </div>
            <div className={styles.express_button}>
              <span>Express</span>
            </div>
            <div className={styles.mongodb_button}>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles.content}>
            <h1>E-commerce service</h1>
            <span><b>Features:</b> Product list (add to favorite, rate, add to cart), product personalization, cart component, user registration & login, send order, user page & orders list.</span><br/>
            <span><b>Last update:</b> March 2023</span><br/>
            <span><b>Actually working on:</b> Online payment implementation</span>
          </div>
          <div className={styles.summary}>
            <div className={styles.button}>
              <span>View in browser</span>
            </div>
            <div className={styles.button}>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.image}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/portfolio/prospero.png`} 
            alt="Prospero Store"
          />
          <h3>View in browser</h3>
        </div>
        <div className={styles.description}>
          <div className={styles.buttons}>
            <div className={styles.react_button}>
              <span>React</span>
            </div>
            <div className={styles.nodejs_button}>
              <span>NodeJS</span>
            </div>
            <div className={styles.express_button}>
              <span>Express</span>
            </div>
            <div className={styles.mongodb_button}>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles.content}>
            <h1>E-commerce service</h1>
            <span><b>Features:</b> Product list (add to favorite, rate, add to cart), product personalization, cart component, user registration & login, send order, user page & orders list.</span><br/>
            <span><b>Last update:</b> March 2023</span><br/>
            <span><b>Actually working on:</b> Online payment implementation</span>
          </div>
          <div className={styles.summary}>
            <div className={styles.button}>
              <span>View in browser</span>
            </div>
            <div className={styles.button}>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.image}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/portfolio/prospero.png`} 
            alt="Prospero Store"
          />
          <h3>View in browser</h3>
        </div>
        <div className={styles.description}>
          <div className={styles.buttons}>
            <div className={styles.react_button}>
              <span>React</span>
            </div>
            <div className={styles.nodejs_button}>
              <span>NodeJS</span>
            </div>
            <div className={styles.express_button}>
              <span>Express</span>
            </div>
            <div className={styles.mongodb_button}>
              <span>MongoDB</span>
            </div>
          </div>
          <div className={styles.content}>
            <h1>E-commerce service</h1>
            <span><b>Features:</b> Product list (add to favorite, rate, add to cart), product personalization, cart component, user registration & login, send order, user page & orders list; Bootstrap grid, MaterialUI, Framer Motion animations</span><br/>
            <span><b>Last update:</b> March 2023</span><br/>
            <span><b>Actually working on:</b> Online payment implementation</span>
          </div>
          <div className={styles.summary}>
            <div className={styles.button}>
              <span>View in browser</span>
            </div>
            <div className={styles.button}>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
