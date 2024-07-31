import { Navbar } from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Page3 } from "./Page3"
import { Page2 } from "./Page2"

export const TopPage = () =>{
    return(
        <BrowserRouter>
            <div>
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </BrowserRouter>
    )
}