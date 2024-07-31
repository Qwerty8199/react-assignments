import { useContext } from "react"
import { ThemeContext } from "../hooks/ThemeProvider"


export const AnotherComponent = () =>{
    const {theme, _} = useContext(ThemeContext)

    return(
        <div>
            <h1>
                Theme - {theme}
            </h1>
        </div>
    )
}