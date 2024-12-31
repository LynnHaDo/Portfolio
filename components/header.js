import styles from './header.module.scss';
import utilStyles from '../styles/utils.module.scss';

import Logo from './logo';
import NavItem from './navItem';

import { useEffect, useState } from 'react';

const themes = ['dark', 'light', 'green'];

export default function Header({ site, onChangeTheme, theme, background }) {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [dropdownIcon, setDropdownIcon] = useState('+');
    const [windowY, setWindowY] = useState(window.scrollY);

    const [backgroundTransparency, setBgTransparency] = useState(0);

    const setWindowYPos = () => {
        setWindowY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', setWindowYPos);
        return () => window.removeEventListener('scroll', setWindowYPos)
    }, [])

    useEffect(() => {
        let headerTransparency = windowY/500;
        if (headerTransparency < 1)
        {
            setBgTransparency(headerTransparency)
        }
    }, [windowY])

    const toggleDropdown = (isOpen) => {
        setIsDropdownActive(isOpen);
        
        if (isOpen) 
        {
            setDropdownIcon('-');
        }
        else {
            setDropdownIcon('+');
        }
    }

    return (
        <div className={styles.header} style={{background: `rgba(${background},${backgroundTransparency})`}}>
                <input type="checkbox" className={styles.hidden} id="nav"/>
                <label for="nav" className={styles.navOpen}><i></i><i></i><i></i></label>
                <div className={`${styles.contentWrapper} container`}>
                    <header className = {`${utilStyles.code} d-flex justify-content-between align-items-center`}>
                        <Logo />

                        <div className={`${styles.buttons} d-flex justify-content-between align-items-center`}>
                            <NavItem href='/' text='Projects' 
                                    isActive={site === 'Home'} />
                            <NavItem href='/about' text='About' 
                                    isActive={site === 'About'} />
                            <NavItem href='https://github.com/LynnHaDo' text='Github' isActive={false} target="_blank" rel="noopener noreferrer"/>
                            
                            <div className={styles.wrapperDropdown}
                                onClick={() => toggleDropdown(!isDropdownActive)}>
                                <span className={`${utilStyles.nav} ${styles.selectedTheme}`}>{theme}</span>
                                <span className = {`${styles.arrow} ${utilStyles.icon} transition-all ml-auto`}>{dropdownIcon}</span>
                                <ul className={`${styles.dropdown} ${isDropdownActive ? styles.active : ''}`}
                                    style={{background: `rgba(${background},${backgroundTransparency})`}}>
                                    {
                                        themes.map((theme) => (
                                            <li key={theme} onClick={() => onChangeTheme(theme)}>
                                                {theme.toUpperCase()}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
        </div>
    )
}