import { Link } from "react-router-dom"

export const Navbar = () =>{
    return(
        <div>
            <nav>
                <ul className="flex p-2 ml-2">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/page2">Page 2</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/page3">Page 3</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}