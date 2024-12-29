import { useState, useEffect } from 'react'

export function useMounted() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setTimeout(() => {
            setMounted(true)
        }, 3000)
	}, [])

	return mounted
}