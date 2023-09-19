import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './MenuSlider.css'
import data from '../../assets/menudata.json'
import { sliderSettings } from '../../assets/common'

const MenuSlider = () => {
  return (
    <section className="paddings innerWidth m-wrapper">
      <div className=" m-container">
        <div className="m-head flexColStart">
          <span className='o-menutitle'>Our Menu</span>
          <span className='c-choicestitle'>Chefs' favorites!</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i)=> (
              <SwiperSlide key={i}>
                <div className="flexColStart m-card">
                  <img src={card.image} alt='food' />
                  <span className='dish-title'>{card.dish}</span>
                  <span className='dish-info'>{card.description}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default MenuSlider

const SliderButtons = () => {
  const swiper = useSwiper ();
  return (
    <div className="flexCenter m-button">
    <button onClick={() => swiper.slidePrev ()}>&lt;</button>
    <button onClick={() => swiper.slideNext ()}>&gt;</button>
    </div>
  );
};