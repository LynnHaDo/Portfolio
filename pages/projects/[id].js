import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'

import path from 'path'
import { getAllProjectIds, getHtmlContentFromMd, projectsDir } from '../../lib/projects'

import styles from '../../styles/Project.module.scss'
import utilStyles from '../../styles/utils.module.scss'

export default function Project({ projectData }) {
    return (
        <Layout siteTitle={projectData.title}>
            <div className="row mb-5">
                <h1 className={utilStyles.heading2Xl}>
                    {projectData.title}
                </h1>
            </div>
            
            <div className="row mt-5 mb-3">
                <div className={`col-lg-4 ${utilStyles.lightText} ${utilStyles.code} ${utilStyles.allCaps} mb-5`}>
                    <div className={`${utilStyles.tableHeader} row`}>
                        <div className={`col-lg-3 ${utilStyles.code}`}>
                            / KEY
                        </div>
                        <div className={`col-lg-8 ${utilStyles.code}`}>
                            / VALUE
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Start date 
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            <Date fromString={projectData.date} />
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            End date 
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            <Date fromString={projectData.end_date} />
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Type
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            <div className={utilStyles.tag}>
                                {projectData.label}
                            </div>
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Github URL
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            <a href={projectData.github_url} className={`${utilStyles.tag}`} target='_blank' rel="noopener noreferrer">
                                Go to repository
                                <svg className={utilStyles.rightArrow} height={10} width={10} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M511.894,19.228c-0.031-0.316-0.09-0.622-0.135-0.933c-0.054-0.377-0.098-0.755-0.172-1.13 c-0.071-0.358-0.169-0.705-0.258-1.056c-0.081-0.323-0.152-0.648-0.249-0.968c-0.104-0.345-0.234-0.678-0.355-1.015 c-0.115-0.319-0.22-0.641-0.35-0.956c-0.13-0.315-0.284-0.616-0.428-0.923c-0.153-0.324-0.297-0.651-0.467-0.969 c-0.158-0.294-0.337-0.574-0.508-0.86c-0.186-0.311-0.362-0.626-0.565-0.93c-0.211-0.316-0.447-0.613-0.674-0.917 c-0.19-0.253-0.366-0.513-0.568-0.76c-0.443-0.539-0.909-1.058-1.402-1.551c-0.004-0.004-0.007-0.008-0.011-0.012 c-0.004-0.004-0.008-0.006-0.011-0.01c-0.494-0.493-1.012-0.96-1.552-1.403c-0.247-0.203-0.507-0.379-0.761-0.569 c-0.303-0.227-0.6-0.462-0.916-0.673c-0.304-0.203-0.619-0.379-0.931-0.565c-0.286-0.171-0.565-0.35-0.859-0.508 c-0.318-0.17-0.644-0.314-0.969-0.467c-0.307-0.145-0.609-0.298-0.923-0.429c-0.315-0.13-0.637-0.236-0.957-0.35 c-0.337-0.121-0.669-0.25-1.013-0.354c-0.32-0.097-0.646-0.168-0.969-0.249c-0.351-0.089-0.698-0.187-1.055-0.258 c-0.375-0.074-0.753-0.119-1.13-0.173c-0.311-0.044-0.617-0.104-0.933-0.135C492.072,0.037,491.37,0,490.667,0H213.333 C201.551,0,192,9.551,192,21.333c0,11.782,9.551,21.333,21.333,21.333h225.83L6.248,475.582c-8.331,8.331-8.331,21.839,0,30.17 c8.331,8.331,21.839,8.331,30.17,0L469.333,72.837v225.83c0,11.782,9.551,21.333,21.333,21.333S512,310.449,512,298.667V21.335 C512,20.631,511.963,19.928,511.894,19.228z"></path> </g> </g> </g></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <div className={`${utilStyles.tableHeader} row mb-3`}>
                        <div className={`col-lg-12 ${utilStyles.code}`}>
                            / ABOUT
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </div>
                <div className="col-lg-1"></div>
            </div> 
        </Layout>
    )
}

/**
 * Defines a list of paths to be statically generated 
 * @returns 
 */
export async function getStaticPaths() {
    // returns a list of possible values for id 
    const paths = getAllProjectIds();
    return {
        paths, 
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // fetch data for the project using params.id
    const projectData = await getHtmlContentFromMd(projectsDir, params.id);
    return {
        props: {
            projectData
        }
    }
}