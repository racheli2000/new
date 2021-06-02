import { Link } from "react-router-dom";



export default function Manue(){

    return(
        <>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/LOGIN">LOGIN</Link>
            </li>
            <li>
                <Link to="/ABOUT">ABOUT</Link>
            </li>
        </ul>
        </>
    )
}