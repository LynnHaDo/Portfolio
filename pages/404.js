import Layout from '../components/layout'
import Head from 'next/head'

import utilStyles from '../styles/utils.module.scss'

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>Oops</title>
            </Head>

            <section className={utilStyles.headingXl}>
                <p>404: Page not Found</p>
            </section>

            <p>The page you are looking for doesn't exist or has been moved.</p>
        </Layout>
    );
}