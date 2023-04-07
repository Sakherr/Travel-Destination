import { Link } from "react-router-dom";
import './Navbar.css';
function NavBar () {
    return (
    <>
        <h1 class="travel-heading">Travel app</h1>
        <nav>
        <ul>
                <li><Link id="link" to = '/'>Home</Link></li>
                <li>MAP</li>
                
                <li>The history</li>
         </ul>
        </nav>
        
    </>
    )
}

export default NavBar;