import Link from 'next/link';

import utilStyles from '../styles/utils.module.scss';

export default function Logo() {
    return (
        <Link href="/" className={`${utilStyles.nav} ${utilStyles.colorInherit}`}>
            LD
        </Link>
    )
}