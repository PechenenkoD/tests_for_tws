import React from 'react'
import Menu from '../../other/Menu'

import './../../scss/style.scss'

/* img */
import logo from './../../assets/Bitmap.png'
import order from './../../assets/order.png'


const Header = () => {
    return(
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__block'>
                    <img className='header__logo' src={logo} alt='logo' />
                </div>
                <div className='header__order'>
                    <img className='header__order__button' src={order} alt='order_button' />
                    <Menu />
                </div>
            </nav>
        </header>
    )
}


export default Header