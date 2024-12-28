import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <main>
                <h1 className={styles.title}>
                    About me
                </h1>
            </main>
        </div>
    )
}