import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import './../scss/style.scss'

/* img */
import menu from './../assets/menu.png'
import cancel from './../assets/cancel.png'


const Menu = () => {
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <div>
            <div>
                <img className='menu__header__menu' src={menu} alt='button_menu' onClick={showSidebar} />
            </div>
            <aside className={sidebar ? 'menu__navbar active' : 'menu__navbar'}>
                <div className='menu__navbar__nav'>
                    <ul className='menu__navbar__items' onClick={showSidebar}>
                        <li className='menu__navbar__item'>
                            <img className='menu__navbar__cancel' src={cancel} alt='button_cancel' onClick={showSidebar} />
                        </li>
                        <li className='menu__navbar__item active'>
                            <NavLink to="/all">Все</NavLink>
                        </li>
                        <li className='menu__navbar__item'>
                            <NavLink to="/raincoat">Плащи</NavLink>
                        </li>
                        <li className='menu__navbar__item'>
                            <NavLink to="/sneakers">Кроссовки</NavLink>
                        </li>
                        <li className='menu__navbar__item'>
                            <NavLink to="/shirts">Рубашки</NavLink>
                        </li>
                        <li className='menu__navbar__item'>
                            <NavLink to="/pants">Брюки</NavLink>
                        </li>
                    </ul>
                    <form className='menu__navbar__form' action="/" method="post">
                        <select className='menu__navbar__select' name="country" id="country">
                            <option value="filter">Сортировать</option>
                            <option value="expensive">От дорогих к дешевым</option>
                            <option value="cheap">От дешевых к дорогим</option>
                            <option value="popular">Популярные</option>
                            <option value="new">Новые</option>
                        </select>
                    </form>
                </div>
            </aside>
        </div>
    )
}


export default Menu