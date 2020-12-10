import React from 'react'
import { NavLink } from 'react-router-dom'

import './../../scss/style.scss'


const Navbar = (props) => {
    return(
        <aside className='navbar'>
            <div className='navbar__nav'>
                <ul className='navbar__items'>
                    <li className='navbar__item active'>
                        <NavLink to="/all">Все</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/raincoat">Плащи</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/sneakers">Кроссовки</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/shirts">Рубашки</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/pants">Брюки</NavLink>
                    </li>
                </ul>
                <form className='navbar__form' action="/" method="post">
                    <select className='navbar__select' name="country" id="country">
                        <option value="filter">Сортировать</option>
                        <option value="expensive">От дорогих к дешевым</option>
                        <option value="cheap">От дешевых к дорогим</option>
                        <option value="popular">Популярные</option>
                        <option value="new">Новые</option>
                    </select>
                </form>
            </div>
        </aside>
    )
}


export default Navbar