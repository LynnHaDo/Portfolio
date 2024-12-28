import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export const name = 'Linh Do'

export default function Layout({ children, siteTitle, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/logo.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap" rel="stylesheet" />
            </Head>

            <header className = {styles.header}>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    </Link>
                </h2>
            </header>

            <main>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
                </div>
            )}

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/logo.png" alt="L" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}