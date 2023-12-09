import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

function Home() {
    return (
        <header>
            <NavLink to="/">
                <IoFastFood/>
                   <h1>
                    RECIPE APP
                   </h1>
                </NavLink>
            <nav>
            <FaSearch />
            </nav>
        </header>
    )
}

export default Home;