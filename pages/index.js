import utilStyles from '../styles/utils.module.css';

import Head from 'next/head'
import Link from 'next/link'
import { getSortedProjectsData } from '../lib/projects';

import Layout from '../components/layout'
import Date from '../components/date';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();

    return {
        props: {
            allProjectsData
        }
    }
}

export default function Home( { allProjectsData } ) {
  return (
    <Layout home siteTitle={"Home"}>
        <Head>
            <title>Linh Do</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <p>My name is Linh</p>
        </section>

        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title, end_date, label }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date fromString={date} /> - <Date fromString={end_date} />
              </small>
              {label}
            </li>
          ))}
        </ul>
    </Layout>
  );
}


