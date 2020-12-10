import React from 'react'

import './../../../../scss/style.scss'

import img_3 from './../../../../assets/img_3.jpg'
import img_5 from './../../../../assets/img_5.jpg'
import img_1_1 from './../../../../assets/img_1_1.jpg'
import img_1_2 from './../../../../assets/img_1_2.jpg'
import img_1_3 from './../../../../assets/img_1_3.jpg'
import img_1_4 from './../../../../assets/img_1_4.jpg'
import img_1_5 from './../../../../assets/img_1_5.jpg'
import arrow_left from './../../../../assets/arrow_left.png'
import arrow_right from './../../../../assets/arrow_right.png'


const Sneakers = (props) => {
    return(
        <main className='content'>
            <section className='content__block'>
            <div className='content__item'>
                    <img className='content__prod' src={img_3} alt='img_thirts' />
                    <div className='slide__block'>
                        <div className='slide__block__items'>
                            <div>
                                <img className='slide__item' src={arrow_left} alt='arrow_left' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_1} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_2} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_3} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_4} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_5} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={arrow_right} alt='arrow_right' />
                            </div>
                        </div>
                    </div> {/* /.slide__block */}
                    <div className='content__info'>
                        <p>Обувь</p>
                        <h1>Кроссовки «Kaiwa» Y3 x Adidas</h1>
                        <b>$ 240</b>
                        <p>на складе: 134</p>
                    </div>
                </div>
                    <div className='content__item'>
                    <img className='content__prod' src={img_5} alt='img_thirts' />
                    <div className='slide__block'>
                        <div className='slide__block__items'>
                            <div>
                                <img className='slide__item' src={arrow_left} alt='arrow_left' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_1} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_2} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_3} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_4} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={img_1_5} alt='img_thirts' />
                            </div>
                            <div>
                                <img className='slide__item' src={arrow_right} alt='arrow_right' />
                            </div>
                        </div>
                    </div> {/* /.slide__block */}
                    <div className='content__info'>
                        <p>Обувь</p>
                        <h1>Кроссовки с пряжками</h1>
                        <b>$ 390</b>
                        <p>на складе: 11</p>
                    </div>
                </div>
            </section>
        </main>
    )
}


export default Sneakers