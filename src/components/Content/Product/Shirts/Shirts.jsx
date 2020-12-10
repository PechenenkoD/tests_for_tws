import React from 'react'
import Slide from '../SlideBlock/Slide'

import './../../../../scss/style.scss'

/* img */
import img_6 from './../../../../assets/img_6.jpg'
import img_2 from './../../../../assets/img_2.jpg'
import img_4 from './../../../../assets/img_4.jpg'


const Shirts = () => {
    return(
        <main className='content'>
            <section className='content__block'>
                <div className='content__item'>
                    <img className='content__prod' src={img_6} alt='img_thirts' />
                    <Slide />
                    <div className='content__info'>
                        <p>Рубашки</p>
                        <h1>Рубашка на пуговицах</h1>
                        <b>$ 320</b>
                        <p>на складе: 20</p>
                    </div>
                </div>
                <div className='content__item'>
                    <img className='content__prod' src={img_2} alt='img_thirts' />
                    <Slide />
                    <div className='content__info'>
                        <p>Рубашки</p>
                        <h1>Рубашка с принтом</h1>
                        <b>$ 170</b>
                        <p>на складе: 11</p>
                    </div>
                </div>
                <div className='content__item'>
                    <img className='content__prod' src={img_4} alt='img_thirts' />
                    <Slide />
                    <div className='content__info'>
                        <p>Рубашки</p>
                        <h1>Куртка-рубашка с карманами</h1>
                        <b>$ 1240</b>
                        <p>на складе: 11</p>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Shirts