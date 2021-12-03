import react, { useRef, useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Map from "../../components/map/KakaoMap.js"

import { Staff, Special, Exam, Sevice, Sns } from "./data.js";

import "../../sass/main/main.scss"
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation } from 'swiper';
import { within } from "@testing-library/dom";
SwiperCore.use([EffectFade,Autoplay,Pagination,Navigation]);

function Main() {

  const MainSlide = () => {

    let [bgUrl, setBgUrl] = useState("pc");
    useEffect(() => {
      let width = window.innerWidth;
      width > 499 ? setBgUrl("pc") : setBgUrl("m");
    })
    const slidePage = 2;
    let slide = [];
    for (let i = 1; i <= slidePage; i++) {
      slide.push(
        <SwiperSlide className="slide" style={{ backgroundImage: `url('/img/main/${bgUrl}_main_banner0${i}.jpg')` }}>
          <p>바르고 아름답게, <span>바른미</span></p>
        </SwiperSlide>
      )
    }
    return slide;
  }

  let width = window.innerWidth;
  const ScollDown = () => {
    if (width < 500) {
      window.scrollTo({top : 600, behavior: 'smooth'});
    } else {
      window.scrollTo({top : 800, behavior: 'smooth'});
    }
    
  }

  let [specialScroll, setspecialScroll] = useState(false);
  let [sevicelScroll, setSeviceScroll] = useState(false);
  window.addEventListener('scroll', () => {
    let top = window.scrollY;
    if (width < 500) {
      if (top > 1100) {
        setspecialScroll(true);
      }
      if (top > 2700) {
        setSeviceScroll(true);
      }
    } else {
      if (top > 1100) {
        setspecialScroll(true);
      }
      if (top > 3000) {
        setSeviceScroll(true);
      }
    }
  })

  const BaunmiSlide = () => {
    const slidePage = 4;
    let slide = [];
    for (let i = 1; i <= slidePage; i++){
      slide.push(
        <SwiperSlide className="slide">
          <img src={`/img/main/baunmi_slide0${i}.jpg`} alt="" />
        </SwiperSlide>
      )
    }
    return slide;
  }

  const BrandSlide = () => {
    const slidePage = 5;
    let slide = [];
    for (let i = 1; i <= slidePage; i++){
      slide.push(
        <SwiperSlide className="slide">
           <img src={`/img/main/brand0${i}.png`} alt="" /> 
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
          loop={true}
          autoplay={{
            "delay": 3000,
            "disableOnInteraction": false
          }}
          className="mySwiper mainSlide"
        >
          {MainSlide()}
        </Swiper>
        <img onClick={ScollDown} className="mouse" src="/img/main/mouse.gif" alt="" />
      </div>

      <div className="staffIntro">
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
                <SwiperSlide className="slide" key={i}>
                  <img className="pcimg" src={`/img/main/staff_img0${i + 1}.jpg`} alt="" />
                  <img className="moimg" src={`/img/main/m_staff_img0${i + 1}.jpg`} alt="" />
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
          <p className="subContent">"바른진료로 아름답게"</p>

          <ul className="icon">
            {
              Special.map((a, i) => {
                return (
                  <li className={specialScroll === false ? "" : "on"} key={i}>
                    <img src={`/img/main/special_icon0${i + 1}.png`} alt="" />
                    <p dangerouslySetInnerHTML={{ __html:a }}></p>
                  </li>
                )
              })
            }
          </ul>

          <p className={specialScroll === false ? "content" : "content on"}>
            <div className="left">바른미에는 많은 의료서비스가 담겨있습니다.</div>
            <div className="right">하지만 바르게 진료할 수 없는 것은 담지 않았습니다.</div>
            <div className="left">어떤 마음으로 병원에 오시는지 수많은 경험을 통해</div>
            <div className="right">잘 알고 있기에 <span>바른미에 오시는 걸음이 헛되지 않도록</span></div>
            <div className="left"><span>최선을 다해 바르게 진료</span>하겠습니다</div>
          </p>
        </div>
      </div>

      <div className="exam">
        <div className="wrap">
          <h2>
            바른미 검사실
            <div></div>
          </h2>

          <div className="grid">
            <div>
              <h3>바른미 이비인후과</h3>
              <p>
                바른미 이비인후과만의 <br />
                특화 진료시스템으로 <br />
                양질의 진료를 제공해드릴 것을 <br />
                약속드립니다.
              </p>
            </div>
            <div>
            <Swiper
              pagination={{
                el: '.pageingBall'
              }}
              autoplay={{
                "delay": 2000,
                "disableOnInteraction": false,
              }}
              loop={true}
              className="mySwiper examSlide"
            >
              {
                Exam.map((a, i) => {
                  return (
                    <SwiperSlide className="slide" key={i}>
                      <img src={`/img/main/exam_img0${i + 1}.jpg`} alt="" />
                      <h4>{ a }</h4>
                    </SwiperSlide>
                  )
                })
              }
              <div className="pageingBall"></div>
            </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="sevice">
        <div className="wrap">
          <h2>
            바른미 주요 서비스
            <div></div>
          </h2>

          <ul>
            {
              Sevice.map((a, i) => {
                return (
                  <li className={sevicelScroll === false ? "" : "on"} key={i}>
                    <img src={`/img/main/sevice_img0${i + 1}.png`} alt="" />
                    <h3>
                      { a.title }
                    </h3>
                    <div></div>
                    <p dangerouslySetInnerHTML={{ __html:a.content }}></p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <img className="bg" src="/img/main/sevice_bg.jpg" alt=""/>
      </div>

      <div className="snsLink" style={{ backgroundImage: "url('/img/main/snsLink_bg.jpg')"}}>
        <div className="wrap">
          <div className="content">
            <h3>
              바른진료로 아름답게 <br />
              바른미가 약속드리겠습니다.
            </h3>
            <p>깊이 있는 전문성으로 정확한 진단과 안전한 치료를 제공하겠습니다.</p>
            <p>항상 배우고 발전하여 최신의 의료서비스를 제공하겠습니다</p>
            <p
              >내 가족을 대하듯 환자분들의 아픔을 공감하고 따뜻한 진료로 <br />
              신뢰를 쌓기 위해 노력하겠습니다
            </p>
          </div>
          <ul>
            {
              Sns.map((a, i) => {
                return (
                  <li key={i}>
                    <img src={`/img/main/sns_icon0${i + 1}.png`} alt="" />
                    <p dangerouslySetInnerHTML={{ __html:a }}></p>
                    <a href="">바로가기</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="baunmiLook">
        <h2>
          바른미 둘러보기
          <div></div>
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            "delay": 2000,
            "disableOnInteraction": true
           }}
          pagination={{
            el: '.pageingBall'
          }}
          breakpoints={{
            1200: {
              slidesPerView: 3.7
            },
            800: {
              slidesPerView: 3
            }
           }}
          className="baunmiSlide"
        >
          {BaunmiSlide()}
          <div className="pageingBall"></div>
        </Swiper>
      </div>

      <div className="loction">
        <div className="content">
          <div className="wrap">
            <ul>
              <li>
                <h3>전화문의</h3>
                <p>
                  진료예약 및 진료관련 상담 <br />
                  <span>053-476-0077</span>
                </p>
              </li>
              <li>
                <h3>진료시간</h3>
                <p>
                  평일 09:00 ~ 19:30 <br /> 
                  수/토요일 09:00 ~ 12:30 <br />
                  (수술로 인해 오후에 진료X) <br />
                  <span className="lunchTime">※ 점심시간 12:30 ~ 14:00</span>
                </p>
              </li>
              <li>
                <h3>진료예약</h3>
                <a href=""><img src="/img/main/loction_sns01.png" alt="" /></a>
                <a href=""><img src="/img/main/loction_sns02.png" alt="" /></a>
                <a href=""><img src="/img/main/loction_sns03.png" alt="" /></a>
              </li>
            </ul>
          </div>
        </div>

        {Map("35.844667414751065", "128.60030082507438", "map", "바른미이비인후과")}

        <div className="loctionDetail">
          <i class="fas fa-map-marker-alt"></i>
          대구광역시 남구 봉덕로 90, 3층(봉덕동)
        </div>
      </div>

      <div className="brand">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false,
           }}
          loop={true}
          breakpoints={{
            1600: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            }
           }}
          className="brandSlide"
        >
          {BrandSlide()}
        </Swiper>
      </div>
    </>
  )
}

  export default Main;