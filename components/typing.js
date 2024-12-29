import Typed from 'typed.js'

import styles from './typing.module.scss';

import { Component } from 'react'

class Typing extends Component {
    constructor(props) {
        super(props);
        this.words = props.words
    }

    componentDidMount() {
        const options = {
            strings: this.words,
            typeSpeed: 120,
            backSpeed: 150,
            backDelay: 2000,
            loop: true,
            cursorChar: "|"
        }

        this.typed = new Typed(this.el, options)
    }

    componentWillUnmount() {
        this.typed.destroy()
    }

    render() {
        return (
            <span className = {styles.text} ref={(el) => {
                this.el = el
            }}>
            </span>
        )
    }
}

export default Typing;