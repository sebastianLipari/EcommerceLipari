import { CartWidget } from "./CartWidget"


export const NavBar = () =>{

    return (
        <div className="NavContainer">
            
                <nav className="NavSection" >

                        <ul class="nav nav-underline">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Novedades</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Productos</a>
                                </li>
                               
                                <CartWidget/>   
                        </ul>

                </nav>
        </div>    
    

    )

}