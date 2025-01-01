import Layout from '../components/layout'
import Head from 'next/head'
import Avatar from '../components/avatar'

import utilStyles from '../styles/utils.module.scss'

export default function Custom404() {
    return (
        <Layout siteTitle={"Page not found"}>
            <div className="row mb-2">
                <div className="col-lg-8">
                    <div className={utilStyles.heading2Xl}>
                        404: Page not found
                    </div>
                    <div className={utilStyles.headingXl}>
                        I looked low and high, but this page is unavailable. Insert concerned face.
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>

            <div className="row mb-5">
                <Avatar width={200} height={200} mode="404" />
            </div>
        </Layout>
    );
}