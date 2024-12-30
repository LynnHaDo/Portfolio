import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import Avatar from '../components/avatar';

import utilStyles from '../styles/utils.module.scss';

import { useMounted } from '../hooks/useMounted';

import { getHtmlContentFromMd } from '../lib/projects';

import path from 'path'

const historyDir = path.join(process.cwd(), 'history')

export default function About({ aboutData }) {
    const mounted = useMounted();

    if (!mounted)
        return null 
    else
    return (
        <Layout siteTitle={"About"}>
            <Head>
                <title>About me</title>
            </Head>
            <div className="row mb-5">
                <h1 className={utilStyles.heading2Xl}>
                    About me
                </h1>
            </div>

            <div className="row mt-5 mb-3">
                <div className={`col-lg-4 ${utilStyles.lightText} ${utilStyles.code} ${utilStyles.allCaps} mb-5`}>
                    <div className={`${utilStyles.tableHeader} row ${utilStyles.code}`}>
                        / SUMMARY
                    </div>

                    <div className={`col-lg-4 mb-5 mt-5`}>
                        <Avatar width={200} height={200} />
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Occupation
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            {aboutData.description}
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Based in
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            {aboutData.location}
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            University
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            {aboutData.university}
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Graduation year
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            {aboutData.grad_year}
                        </div>
                    </div>

                    <div className={`${utilStyles.listItem} row`}>
                        <div className={`col-lg-3 d-flex align-items-center`}>
                            Focus
                        </div>
                        <div className={`col-lg-8 d-flex align-items-center`}>
                            {aboutData.focus}
                        </div>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6">
                    <div className={`${utilStyles.tableHeader} row mb-3`}>
                        <div className={`col-lg-12 ${utilStyles.code}`}>
                            / DESCRIPTION
                        </div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
                </div>
                <div className="col-lg-1"></div>
            </div> 
        </Layout>
    )
}

export async function getStaticProps() {
    const aboutData = await getHtmlContentFromMd(historyDir, 'about');

    return {
        props: {
            aboutData
        }
    }
}