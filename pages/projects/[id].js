import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllProjectIds, getProjectData } from '../../lib/projects'

import utilStyles from '../../styles/utils.module.scss'

export default function Project({ projectData }) {
    return (
        <Layout>
            <Head>
                <title>{projectData.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>
                {projectData.title}
            </h1>
            <div className={utilStyles.lightText}>
                <Date fromString={projectData.date} /> - <Date fromString={projectData.end_date} />
            </div>
            <div className={utilStyles.tag}>
                {projectData.label}
            </div>
            <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData
        }
    }
}