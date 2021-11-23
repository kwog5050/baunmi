import react from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Staff } from "./data.js";

import "../../sass/main/main.scss"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { EffectFade, Autoplay, Pagination,Navigation } from 'swiper';
SwiperCore.use([EffectFade,Autoplay,Pagination,Navigation]);

function Main() {

  const MainSlide = () => {
    const slidePage = 2;
    let slide = [];
    for (let i = 1; i <= slidePage; i++) {
      slide.push(
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/img/main/main_banner0${i}.jpg')` }}>
          <p>바르고 아름답게, <span>바른미</span></p>
        </SwiperSlide>
      )
    }
    return slide;
  }

  return (
    <>
      <div className="mainBanner">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          speed={1000}
          autoplay={{
            "delay": 5000,
            "disableOnInteraction": false
          }}
          className="mySwiper mainSlide"
        >
          {MainSlide()}
        </Swiper>
      </div>

      <div className="staffIntro" id="test">
      <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
           }}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
          className="mySwiper staffSlide"
        >
          {
            Staff.map((a, i) => {
              return (
                <SwiperSlide className="slide">
                  <img src={`/img/main/staff_img0${i + 1}.jpg`} alt="" />
                  <div className="content">
                    <h2>{ a.name }<span>{ a.position }</span></h2>
                    <p>{ a.professional }</p>
                    <p>{ a.contnet01 }</p>
                    <p dangerouslySetInnerHTML={{ __html:a.content02 }}></p>
                    <Link to="">자세히보기</Link>
                    <div className="pageNav">
                      <i class="nav fas fa-chevron-left prev"></i>
                      <i class="nav fas fa-chevron-right next"></i>
                    </div>
                  </div> 
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

      <div className="special">
        <div className="wrap">
          <h2>
            바른미의 특별함
            <div></div>
          </h2>
        </div>
      </div>
    </>
  )
}

  export default Main;