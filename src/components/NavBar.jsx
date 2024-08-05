import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget"


export const NavBar = () =>{

    return (
        <div className="NavContainer">
            
                <nav className="NavSection" >

                        <ul class="nav nav-underline">
                                <li class="nav-item"><Link class="nav-link " aria-current="page" to="/">Home</Link></li>
                                <li class="nav-item"> <Link class="nav-link" to="/category/gama-media">Gama-Media</Link></li>
                                <li class="nav-item"> <Link class="nav-link" to="/category/gama-alta">Gama-Alta</Link></li>
                               
                                <CartWidget/>   
                        </ul>

                </nav>
        </div>    
    

    )

}