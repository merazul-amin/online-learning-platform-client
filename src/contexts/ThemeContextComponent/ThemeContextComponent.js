import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextComponent = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light')
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme, handleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export default ThemeContextComponent;