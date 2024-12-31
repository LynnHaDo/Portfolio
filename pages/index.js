import styles from '../styles/Home.module.scss'
import utilStyles from '../styles/utils.module.scss';

import Head from 'next/head'
import Link from 'next/link'
import { getSortedProjectsData } from '../lib/projects';

import Layout from '../components/layout'
import Date from '../components/date';
import Typing from '../components/typing';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    const techStack = ["Angular", "NextJS", "Django", 
                        "Spring Boot", "Ruby on Rails", 
                        "React Native", "SwiftUI"]

    return {
        props: {
            allProjectsData,
            techStack
        }
    }
}

export default function Home( { allProjectsData, techStack } ) {
  return (
    <Layout home siteTitle="Home">
        <Head>
            <title>Linh Do</title>
        </Head>
        
            <div className="row">
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
                {allProjectsData.map(({ id, date, title, end_date, label }) => (
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
    </Layout>
  );
}


