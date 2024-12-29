import Head from 'next/head';
import utilStyles from '../styles/utils.module.scss';
import Layout from '../components/layout';

export default function About() {
    return (
        <Layout siteTitle={"About me"}>
            <Head>
                About
            </Head>
            <main>
                <h1 className={utilStyles.headingXl}>
                    About me
                </h1>
            </main>
        </Layout>
    )
}