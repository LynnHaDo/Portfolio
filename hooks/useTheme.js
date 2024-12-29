import { useState, useEffect } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (localStorage.getItem('theme') != null) 
        {
            setTheme(localStorage.getItem('theme'))
        }
    }, [])

    return theme
}