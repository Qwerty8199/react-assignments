import { useContext } from "react";
import { SearchList } from "./SearchList";
import { ThemeContext10 } from "./ThemeHook";


const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

export const Assign10Page = () =>{


    const {theme, toggleTheme} = useContext(ThemeContext10)

    const handleToggle = () =>{
        console.log("Handling toggle")
        toggleTheme()
    }

    return(
        <div style={{background: theme === 'light' ? '#fff' : '#333', color: theme==='light' ? '#000' : '#fff'}}>
            Data 
            <button className="bg-red-300 ml-2" onClick={handleToggle}>
                Toggle Theme
            </button> 
            <h1>
                Current Theme: {theme}
            </h1>
            <SearchList listData={data} />  
        </div>
    )
    
}