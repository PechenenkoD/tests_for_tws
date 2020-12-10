import React from 'react'
import Slide from './Product/SlideBlock/Slide'

import './../../scss/style.scss'

/* img */
import img_2 from './../../assets/img_2.jpg'
import img_3 from './../../assets/img_3.jpg'
import img_4 from './../../assets/img_4.jpg'
import img_5 from './../../assets/img_5.jpg'
import img_6 from './../../assets/img_6.jpg'


const Content = (props) => {
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
                    <img className='content__prod' src={img_3} alt='img_sneakers' />
                    <Slide />
                    <div className='content__info'>
                        <p>Обувь</p>
                        <h1>Кроссовки «Kaiwa» Y3 x Adidas</h1>
                        <b>$ 240</b>
                        <p>на складе: 134</p>
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
                <div className='content__item'>
                    <img className='content__prod' src={img_5} alt='img_sneakers' />
                    <Slide />
                    <div className='content__info'>
                        <p>Обувь</p>
                        <h1>Кроссовки с пряжками</h1>
                        <b>$ 390</b>
                        <p>на складе: 11</p>
                    </div>
                </div>
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


export default Content