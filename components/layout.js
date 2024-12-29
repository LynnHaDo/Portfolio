import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

import Logo from './logo';

import { useMounted } from '../hooks/useMounted'

export default function Layout({ children, siteTitle, home }) {
    const mounted = useMounted()

    if (!mounted) 
        return null
    else
    return (
        <div className="container">
            <Head>
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/logo.ico" />
            </Head>

            <header className = {`${styles.header} ${utilStyles.code} d-flex justify-content-between align-items-center`}>
                <Logo />

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

            <div className="container">
             <main className={styles.main}>{children}</main>
            </div>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}

            <footer className={styles.footer}>
                <div className = "row">
                    <div className = "col-lg-6 mt-5 mb-5 d-flex align-items-start flex-column">
                        
                            <h2 className={`${utilStyles.headingXl} mb-auto`}>
                                Let's connect!
                            </h2>
                            
                            <div className={`${utilStyles.code} mt-5`}>
                                <p>Made by Linh Do</p>
                                <small className={utilStyles.lightText}>Last Updated: {document.lastModified}</small>
                            </div>
                        
                    </div>
                    <div className = {`col-lg-6 ${utilStyles.code} mt-5 mb-5`}>
                        <div className = "mb-5">
                            <p>/ EMAIL</p>
                            <a href="mailto:dohalinh2303@gmail.com" className={`${utilStyles.tag} ${utilStyles.link}`}>
                                dohalinh2303@gmail.com
                            </a>
                            <a href="mailto:do24l@mtholyoke.edu" className={`${utilStyles.tag} ${utilStyles.link}`}>
                                do24l@mtholyoke.edu
                            </a>
                        </div>

                        <div className = "mb-2">
                            <p>/ SOCIAL</p>
                            <a href="https://github.com/LynnHaDo" target="_blank" className={`${utilStyles.tag} ${utilStyles.link}`}>
                                Github 
                            </a>
                            <a
                                href="https://www.linkedin.com/in/linh-do-0327371b2/"
                                target="_blank"
                                className={`${utilStyles.tag} ${utilStyles.link}`}
                            >
                                LinkedIn
                            </a>
                            <a href="https://www.behance.net/dolinh" target="_blank" className={`${utilStyles.tag} ${utilStyles.link}`}>
                                Behance
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}