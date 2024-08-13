import { createContext, useState } from "react";

export const ThemeContext10 = createContext()

export const ThemeProvider10 = ({ children }) => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = () =>{
        console.log("toggling theme")
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    };

    return(
        <ThemeContext10.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext10.Provider>
    );
}