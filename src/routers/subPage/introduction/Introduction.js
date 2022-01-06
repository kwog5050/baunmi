import React, {useState} from "react";
import { useParams } from "react-router-dom";

import "../../../sass/subPage/introduction.scss"

function Introduction() {
  let { id } = useParams();

  const [imgNum, setImgNum] = useState(2);
  const mainImg = () => {
    return `/img/subPage/introduction/main_img${imgNum}.jpg`
  }

  const imageList = () => {
    const imageNum = 17;
    let img = []
    for (let i = 2; i <= imageNum; i++){
      img.push(
        <li className={i == imgNum ? "on" : ""} onClick={() => { setImgNum(i) }}>
          <img src={`/img/subPage/introduction/img${i}.jpg`} alt="" />
        </li>
      )
    }
    return img;
  }
  
  return (
    <>
      <div className="wrap">
        {
          id != "3" 
            ? <div>
              <img src={`/img/subPage/introduction/introduction0${id}_content.jpg`} alt="" style={{ margin:"50px 0px", width:"100%" }} className="pcimg"/>
              <img src={`/img/subPage/introduction/mobile/introduction0${id}_content.jpg`} alt="" style={{ margin:"50px 0px", width:"100%" }} className="moimg"/>
            </div>
            : <div>
              <div className="around" style={{ margin:"100px 0px" }}>
                <h2>바른미 둘러보기</h2>

                <div className="imageContainer">
                  <img src={mainImg()} alt="" />
                  <ul>
                    {imageList()}
                  </ul>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Introduction;