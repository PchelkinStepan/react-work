import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import FirstSlide from './components/FirstSlide/FirstSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <FirstSlide />
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Слайд 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Слайд 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">Слайд 4</div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev-custom"></div>
        <div className="swiper-button-next-custom"></div>
      </div>
    </div>
  );
};

export default Slider;