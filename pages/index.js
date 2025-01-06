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
  const [isFilterShown, showFilter] = useState(true);

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
                        <div className="col-lg-12">
                            / FILTER
                        </div>
                    </div>
                    <div style={{marginTop: '1em'}}>
                    <button className={utilStyles.filterOpenner} onClick={() => showFilter(!isFilterShown)}>
                        <svg className={utilStyles.folderIcon} width={20} height={16} viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Folder Icon</title>
                            {
                                isFilterShown ? <path fillRule="evenodd" clipRule="evenodd" d="M1 0H7V1H1V0ZM1 6V1H0V9H1V10H11V9H12V3H11V2H8V1H7V2H8V3H11V4H3V5H2V6H1ZM1 7V9H11V5H3V6H2V7H1Z" fill="currentColor"></path> :
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 0H1V1H0V2V3V9H1V10H11V9H12V3H11V2H8V1H7V0ZM11 3V9H1V3H7H8H11ZM7 1V2H1V1H7Z" fill="currentColor"></path>
                            }
                        </svg>
                        Type
                    </button>
                    </div>
                    {
                        isFilterShown && allProjectCategories.map(category => (
                            <div className={utilStyles.formCheck} key={category}>
                                <span></span>
                                <span></span>
                                <input type="checkbox" value={category} id={category} onChange={() => handleCheck(category)} />
                                <label htmlFor={category}>
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
                            / LABEL
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


