import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss';

import Link from 'next/link'
import { getProjectsData, getAllProjectCategories } from '../lib/projects';
import Layout from '../components/layout'
import Date from '../components/date';
import Typing from '../components/typing';

import { useState, useEffect } from 'react'

export async function getStaticProps() {
    const allProjectsData = getProjectsData();
    const allProjectCategories = getAllProjectCategories();

    const techStack = ["Angular", "NextJS", "Django", 
                        "Spring Boot", "Ruby on Rails", 
                        "React Native", "SwiftUI"]

    return {
        props: {
            allProjectsData,
            allProjectCategories,
            techStack
        }
    }
}

export default function Home( { allProjectsData, allProjectCategories, techStack } ) {
  const [projectsData, setProjectsData] = useState(allProjectsData);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterProjectsByCategory = (projectsData, categories = []) => {
    if (categories.length == 0)
    {
        return projectsData
    }
    return projectsData.filter(project => categories.includes(project.category))
  }

  useEffect(() => {
    setProjectsData(filterProjectsByCategory(allProjectsData, selectedCategories));
  }, [selectedCategories])

  const handleCheck = (category) => {
    if (selectedCategories.includes(category)) 
    {
        setSelectedCategories([...selectedCategories.filter(cat => cat !== category)])
    }
    else 
    {
        setSelectedCategories([...selectedCategories, category])
    }
    console.log(selectedCategories);
  }
   
  return (
    <Layout home siteTitle="Home">
            <div className="row mb-5">
                <div className={`col-lg-7 ${styles.displayTextWrapper}`}>
                <div className={styles.displayText}>
                    <div className={`${utilStyles.heading2Xl}`}>Hello from Linh</div>
                    <div className={`${utilStyles.headingXl} 
                                     ${utilStyles.caption}`}>Let me tell you about 
                                     my <Typing words = {["full-stack web development", 
                                                        "mobile development", 
                                                        "research", 
                                                        "product design"]}/> projects.
                    </div>
                    <div className={`${utilStyles.tagsWrapper} mt-5`}>
                        {
                            techStack.map((item) => (
                                <div key={item} className={`${utilStyles.tag} mb-2`}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
                </div>
                <div className='col-lg-5'></div>
            </div>
            
            <div className="row mt-5 mb-3">
                <div className={`col-lg-2 ${utilStyles.lightText} ${utilStyles.code} ${utilStyles.allCaps} mb-5`}>
                    <div className={`${utilStyles.tableHeader} row`}>
                        / TYPE 
                    </div>
                    {
                        allProjectCategories.map(category => (
                            <div className="form-check category" key={category}>
                                <input className="form-check-input" type="checkbox" value={category} id={category} onChange={() => handleCheck(category)} />
                                <label className="form-check-label" htmlFor={category}>
                                    {category}
                                </label>
                            </div>
                        ))
                    }
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-8">
                    <div className={`${utilStyles.tableHeader} row`}>
                        <div className={`col-lg-3 ${utilStyles.code}`}>
                            / DATE
                        </div>
                        <div className={`col-lg-5 ${utilStyles.code}`}>
                            / NAME 
                        </div>
                        <div className={`col-lg-4 ${utilStyles.code}`}>
                            / CATEGORY
                        </div>
                    </div>
                    <div className={utilStyles.list}>
                        {projectsData.map(({ id, date, title, end_date, label }) => (
                            <Link href={`/projects/${id}`} className={`${utilStyles.colorInherit} ${utilStyles.noUnderline}`} key={id}>
                                <div className={`${utilStyles.listItem} row`}>
                                    <div className={`col-lg-3 d-flex align-items-center ${utilStyles.lightText} ${utilStyles.code}`}>
                                        <div>
                                            <Date fromString={date} /> - <Date fromString={end_date} />
                                        </div>
                                    </div>
                                    <div className={`col-lg-5 d-flex align-items-center ${utilStyles.headingMd}`}>
                                        <h4 className={styles.projectTitle}>{title}</h4>
                                    </div>
                                    <div className="col-lg-4 d-flex align-items-center">
                                        <span className={utilStyles.tag}>
                                            {label}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </div>
            
            
    </Layout>
  );
}


