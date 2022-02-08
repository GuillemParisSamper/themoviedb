import React from 'react';
import './Header.scss';

const Header = props =>{
    return <header>
        <span className="populares">Películas Populares</span>
        <span className="upcoming">Próximas películas</span>
        <span className="populares">Películas más votadas</span>
    </header>
}
export default Header;