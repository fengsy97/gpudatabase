import { useEffect, useState } from 'react'

export default function ThemeBtn() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
          window.localStorage.setItem('theme', 'dark')
          setTheme('dark')
        } else {
          window.localStorage.setItem('theme', 'light')
          setTheme('light')
        }
        console.log(theme);
        console.log(window.localStorage.getItem('theme'));
    }

    // theme === 'light' ? document.body.classList.remove('dark-mode') : document.body.classList.add('dark-mode');
    
    useEffect(() => {
        const localTheme = window.localStorage.getItem('components/theme')
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])
    return [theme, toggleTheme];
}
