import React from "react";

function Footer() {
  return (
    <footer>
      <div className="fixedSns">
        <ul>
          <li><a href="" target="_blank"><img src="/img/qick01.svg" alt="" />네이버예약</a></li>
          <li><a href="https://blog.naver.com/barunmiclinic" target="_blank"><img src="/img/qick02.svg" alt="" />블로그</a></li>
          <li><a href="" target="_blank"><img src="/img/qick03.svg" alt="" />카톡상담</a></li>
          <li><a href="https://www.youtube.com/channel/UCyzeTUsLWn8exFtjj7uLaTg" target="_blank"><img src="/img/qick04.svg" alt="" />유튜브</a></li>
          <li><a href="https://www.instagram.com/barunmi/?hl=ko" target="_blank"><img src="/img/qick05.svg" alt="" />인스타그램</a></li>
        </ul>
        <div className="top" onClick={()=>{window.scrollTo({top: 0, behavior : "smooth"})}}><i class="fa-solid fa-caret-up"></i>TOP</div>
      </div>

      <a href="tel:053-476-0077" className="tel"><img src="/img/call.svg" alt="" /></a>
      
      <div className="wrap">
        <div>
          <a href="/" className="logo">
            <img src="/img/ft_logo.svg" alt="" />
          </a>
          <p>
            사업자등록번호 : 443-02-02252 ㅣ 대표 : 최요한 <span>l</span><br className="br"/> 의료기관명칭 : 바른미이비인후과<br />
            주소 : 대구 남구 봉덕로 90 3층 대표전화 : 053-476-0077
          </p>
        </div>
        <ul className="sns">
          <li><a href=""><img src="/img/ft_sns01.png" alt="" /></a></li>
          <li><a href=""><img src="/img/ft_sns02.png" alt="" /></a></li>
          <li><a href="https://blog.naver.com/barunmiclinic"><img src="/img/ft_sns03.png" alt="" /></a></li>
          <li><a href="https://www.instagram.com/barunmi/"><img src="/img/ft_sns04.png" alt="" /></a></li>
          <li><a href="https://www.youtube.com/channel/UCyzeTUsLWn8exFtjj7uLaTg"><img src="/img/ft_sns05.png" alt="" /></a></li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer;