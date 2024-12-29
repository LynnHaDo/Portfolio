import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

export default function Layout({ children, siteTitle, home }) {
    return (
        <div className="container">
            <Head>
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/logo.ico" />
            </Head>

            <header className = {`${styles.header} ${utilStyles.code} d-flex justify-content-between align-items-center`}>
                <Link href="/" className={`${utilStyles.nav} ${utilStyles.colorInherit}`}>
                    LD
                </Link>

                <div className={`${styles.buttons} d-flex justify-content-between align-items-center`}>
                    <Link href="/" className={utilStyles.nav}>
                        Projects
                    </Link>
                    <Link href="/about" className={utilStyles.nav}>
                        About 
                    </Link>
                    <Link href="https://github.com/LynnHaDo" target="_blank" rel="noopener noreferrer" 
                          className={utilStyles.nav}>
                        Github
                    </Link>
                </div>
            </header>

            <main className={styles.main}>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}

            <footer className={styles.footer}>
                <div class = "row">
                    <div class = "col-lg-6"></div>
                    <div className = {`${utilStyles.code} col-lg-6`}>
                        <div class = "mb-5">
                            <p>/ EMAIL</p>
                            <a href="mailto:dohalinh2303@gmail.com" className={utilStyles.tag}>
                                dohalinh2303@gmail.com
                            </a>
                            <a href="mailto:do24l@mtholyoke.edu" className={utilStyles.tag}>
                                do24l@mtholyoke.edu
                            </a>
                        </div>

                        <div class = "mb-2">
                            <p>/ SOCIAL</p>
                            <a href="https://github.com/LynnHaDo" target="_blank" className={utilStyles.tag}>
                                Github 
                            </a>
                            <a
                                href="https://www.linkedin.com/in/linh-do-0327371b2/"
                                target="_blank"
                                className={utilStyles.tag}
                            >
                                LinkedIn
                            </a>
                            <a href="https://www.behance.net/dolinh" target="_blank" className={utilStyles.tag}>
                                Behance
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}