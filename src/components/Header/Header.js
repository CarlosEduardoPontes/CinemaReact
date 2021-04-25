import React from 'react';
import { AreaHeader } from './styled';
import { Link} from 'react-router-dom';

function Header(){
    return(
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    PagCine
                </div>
                
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Programacao">Programação</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/cadastro">Cadastre-se</Link></li>                      
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    )
}
export default Header;