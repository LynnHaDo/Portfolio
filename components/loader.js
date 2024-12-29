import { Component } from 'react'

import styles from './loader.module.scss'

class Loader extends Component {
    componentWillUnmount() {
        this.el.classList.add(styles.inactive)
    }

    render() {
        return (
            <div className={`${styles.loaderWrapper} d-flex justify-content-center align-items-center`} ref={(el) => {
                this.el = el
            }}>
                <div className={styles.loader}></div>
            </div>
        )
    }
}

export default Loader;