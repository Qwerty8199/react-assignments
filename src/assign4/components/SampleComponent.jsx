import { useContext } from "react"
import { ThemeContext } from "../hooks/ThemeProvider";


export const SampleComponent = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div style={{background: theme === 'light' ? '#fff' : '#333', color: theme==='light' ? '#000' : '#fff'}} >
            <h1>
                Current Theme: {theme}
            </h1>
            <button onClick={toggleTheme}>
                Toggle
            </button>
        </div>
    )
}