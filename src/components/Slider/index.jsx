
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Slider.scss"

import img1 from '../../assets/img/slider/img1.png'
import img2 from '../../assets/img/slider/img2.png'


// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);


export default function App() {
  

  
  return (
    <>
    
  <Swiper  slidesPerView={1} zoom autoplay A11y  watchSlidesVisibility centeredSlides={true} spaceBetween={30}  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }} className="swiper-container">

    <SwiperSlide>
    <div className="slider-content">
        <div className="slider-text">
          <h2>«Лучшую фразу из отзыва напишите в заголовке»</h2>
          <p>
          «Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны. <br /><br />
          Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»
          </p>
          <a href='#'>Читать отзыв полностью</a>
        </div>
        <div className="slider-image">
          <div className="slider-image__img">
            <img src={img1} alt="" />
          </div>
          <div className="slider-image__text">
            <h3>Елена Иванова</h3>
            <p>Краснодар</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="slider-content">
        <div className="slider-text">
          <h2>«Результат дико порадовал, друзья были в восторге»</h2>
          <p>
          «Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!)»
          </p>
          <a href='#'>Читать отзыв полностью</a>
        </div>
        <div className="slider-image">
          <div className="slider-image__img">
            <img src={img2} alt="" />
          </div>
          <div className="slider-image__text">
            <h3>Ирина Ларионова</h3>
            <p>Санкт-Петербург</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
    
    <SwiperSlide>
    <div className="slider-content">
        <div className="slider-text">
          <h2>«Спасибо за прекрасные капкейки, все на высоте»</h2>
          <p>
          «Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фильшивые отзывы всегда видно. Будьте честны. <br /><br />
          Опишите конечный результат, который получил человек после работы с вами. Что конеретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»
          </p>
          <a href='#'>Читать отзыв полностью</a>
        </div>
        <div className="slider-image">
          <div className="slider-image__img">
            <img src={img2} alt="" />
          </div>
          <div className="slider-image__text">
            <h3>Иван Демидов</h3>
            <p>Краснодар</p>
          </div>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>

  <div className="swiper-btns">
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
  </div>


  
    </>
  )
}