import utilStyles from '../styles/utils.module.scss'

import Link from 'next/link'

export default function NavItem({href, text, isActive, target = null, rel = null, onClick})
{
    return (
        <Link href={href} 
              className={`${utilStyles.nav} ${isActive ? utilStyles.active : ''}`}
              target={target}
              rel={rel}
              onClick={onClick}>
            {text}
        </Link>
    )
}