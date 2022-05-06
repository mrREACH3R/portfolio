import React from 'react';
import './portfolio.css';
import ecommerce from '../../img/ecommerce.png';
import musicapp from '../../img/musicapp.png';
import hoc from '../../img/hoc.png';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
const portfolio =()=>{
    return(
<div className='portfolio'>
    {/* heading*/}
    <span>Recent</span>
    <span>Projects</span>
<Swiper
spaceBetween={20}
slidesPerView={3}
grabCursor={true}
className='portfolio-slider'
>
<SwiperSlide>
    <img src={ecommerce} alt=""/>
</SwiperSlide>
<SwiperSlide>
    <img src={musicapp} alt=""/>
</SwiperSlide>
<SwiperSlide>
    <img src={hoc} alt=""/>
</SwiperSlide>
<SwiperSlide>
    <img src={musicapp} alt=""/>
</SwiperSlide>
</Swiper>

</div>
    )
}

export default portfolio;