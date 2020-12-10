import React from 'react'
import Slide from '../SlideBlock/Slide'

import './../../../../scss/style.scss'

/* img */
import img_6 from './../../../../assets/img_6.jpg'


const Pants = () => {
    return(
        <main className='content'>
            <section className='content__block'>
                <div className='content__item'>
                    <img className='content__prod' src={img_6} alt='img_pants' />
                    <Slide />
                    <div className='content__info'>
                        <p>Брюки</p>
                        <h1>Укороченные зауженные брюки</h1>
                        <b>$ 647</b>
                        <p>на складе: 7</p>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Pants