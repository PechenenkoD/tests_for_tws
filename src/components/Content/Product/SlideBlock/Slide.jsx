import React from 'react'

import './../../../../scss/style.scss'

import img_1_1 from './../../../../assets/img_1_1.jpg'
import img_1_2 from './../../../../assets/img_1_2.jpg'
import img_1_3 from './../../../../assets/img_1_3.jpg'
import img_1_4 from './../../../../assets/img_1_4.jpg'
import img_1_5 from './../../../../assets/img_1_5.jpg'
import arrow_left from './../../../../assets/arrow_left.png'
import arrow_right from './../../../../assets/arrow_right.png'

const Slide = () => {
    return(
        <div className='slide__block'>
            <div className='slide__block__items'>
                <div>
                    <img className='slide__item' src={arrow_left} alt='arrow_left' />
                </div>
                <div>
                    <img className='slide__item' src={img_1_1} alt='img' />
                </div>
                <div>
                    <img className='slide__item' src={img_1_2} alt='img' />
                </div>
                <div>
                    <img className='slide__item' src={img_1_3} alt='img' />
                </div>
                <div>
                    <img className='slide__item' src={img_1_4} alt='img' />
                </div>
                <div>
                    <img className='slide__item' src={img_1_5} alt='img' />
                </div>
                <div>
                    <img className='slide__item' src={arrow_right} alt='arrow_right' />
                </div>
            </div>
        </div>
    )
}


export default Slide