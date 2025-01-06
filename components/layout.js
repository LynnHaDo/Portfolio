import Head from 'next/head';
import Link from 'next/link';
import Loader from './loader';
import Header from './header';

import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

import { useEffect, useState, useRef } from 'react';
import { useMounted } from '../hooks/useMounted'

import { hexToRGB } from '../lib/misc';
import {darkThemeStyle, lightThemeStyle, greenThemeStyle} from '../components/styles'

export default function Layout({ children, siteTitle, home }) {
    const mounted = useMounted();

    const [selectedTheme, setSelectedTheme] = useState('dark');

    const getRootProperty = (name) => {
        return window.getComputedStyle(document.documentElement).getPropertyValue(name)
    }

    const [background, setBackground] = useState('');

    const [isLoaderShown, showLoader] = useState(true);

    const audioEl = useRef(null);

    const changeTheme = (newTheme) => {
        if (newTheme !== localStorage.getItem('theme'))
        {
            localStorage.setItem('theme', newTheme)
            setSelectedTheme(newTheme)
            setThemeStyle()
        }
    }

    const getThemeStyles = () => {
        if (localStorage.getItem('theme') != null) 
        {
            setSelectedTheme(localStorage.getItem('theme'))
        }

        switch (selectedTheme) {
            case 'dark':
                return darkThemeStyle
            case 'light':
                return lightThemeStyle
            default:
                return greenThemeStyle
        }
    }

    const setThemeStyle = () => {
        let themeStyle = getThemeStyles();
        const root = document.querySelector(':root');
        Object.entries(themeStyle).forEach(v => {
            if (v[0] == '--bg') {
                setBackground(hexToRGB(v[1]));
            }
            root.style.setProperty(v[0], v[1])
        });
        
    }

    useEffect(() => {
        setThemeStyle()
    }, [selectedTheme])

    useEffect(() => {
        if (document)
        {
            setBackground(hexToRGB(getRootProperty('--bg')));
            let clickables = document.querySelectorAll('a, button');
            clickables.forEach((el) => {
                el.addEventListener('click', () => {
                    audioEl.current.play();
                })
            })
        }
    })

    useEffect(() => {
        setTimeout(() => {
            showLoader(false);
        }, 2000)
    }, [isLoaderShown])

    if (!mounted) 
        return null
    else
    return (
        <div className="container">
            <Head>
                <meta name="og:title" content={siteTitle} />
                <link rel="icon" href="/logo.ico" />
                <title>Linh Do | {siteTitle}</title>
            </Head>

            {
                isLoaderShown ? <Loader /> : 

                <>
                    <Header onChangeTheme={(theme) => changeTheme(theme)} 
                            site={siteTitle} 
                            theme={selectedTheme}
                            background={background}
                    />

                    <audio ref={audioEl} src="/sounds/button-click.wav" />

                    <main className={styles.main}>
                        <div className="container">
                            {children}
                        </div>
                    </main>
            

                    {!home && (
                        <div className={styles.backToHome}>
                            <Link href="/" className={`${utilStyles.nav} ${utilStyles.code}`}>
                            <svg viewBox="0 -6.5 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={utilStyles.icon}>
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> 
                                <title>left-arrow</title> 
                                <g id="icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
                                    <g id="ui-gambling-website-lined-icnos-casinoshunter" transform="translate(-342.000000, -159.000000)" fill="#252528" fillRule="nonzero"> 
                                        <g id="square-filled" transform="translate(50.000000, 120.000000)"> 
                                            <path d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z" id="left-arrow" transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000) "> 
                                                </path> 
                                                </g> 
                                                </g> 
                                                </g> 
                                                </g>
                                                </svg>
                                Back to home
                            </Link>
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
                                    <a href="mailto:dohalinh2303@gmail.com" className={`${utilStyles.tag} ${utilStyles.link} mb-2`}>
                                        dohalinh2303@gmail.com
                                    </a>
                                    <a href="mailto:do24l@mtholyoke.edu" className={`${utilStyles.tag} ${utilStyles.link} mb-2`}>
                                        do24l@mtholyoke.edu
                                    </a>
                                </div>

                                <div className = "mb-2">
                                    <p>/ SOCIAL</p>
                                    <a href="https://github.com/LynnHaDo" target="_blank" className={`${utilStyles.tag} ${utilStyles.link} mb-2`}>
                                        Github 
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/linh-do-0327371b2/"
                                        target="_blank"
                                        className={`${utilStyles.tag} ${utilStyles.link} mb-2`}
                                    >
                                        LinkedIn
                                    </a>
                                    <a href="https://www.behance.net/dolinh" target="_blank" className={`${utilStyles.tag} ${utilStyles.link} mb-2`}>
                                        Behance
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            }
        </div>
    )
}