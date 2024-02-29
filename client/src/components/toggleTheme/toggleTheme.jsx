import React, { useState, useEffect } from 'react';

function ThemeToggler({themes, toggleTheme}) {

    useEffect(() => {
        applyTheme();
    }, [themes]);


    const applyTheme = () => {
        const selectedTheme = themes[theme];
        Object.keys(selectedTheme).forEach(property => {
            document.documentElement.style.setProperty(`--${property}`, selectedTheme[property]);
        });
    };
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };





    return (
        <div>

        </div>
    );
}

export default ThemeToggler;
