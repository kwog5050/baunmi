import react, {useState} from "react";
import { Link, useParams } from "react-router-dom";

import "../../sass/subPage/banner.scss"

function Banner() {

  let { id, tap } = useParams();
  let [menuList, setMenuList] = useState([
    {
      title: ["진료시간", "전화상담", "카카오톡상담", "온라인 예약상담"],
      url: ["1", "2", "3","4"]
    },
  ]);
  
  let menu = null;
  let url = null;
  let title = "";

  switch (id){
    case "why":
      title = "왜 바른미인가?";
      menu = menuList[0].title;
      url = menuList[0].url;
      break;
    default:
      break;
  }
  return (
    <>
      <div className="banner">
        <img src={`/img/subPage/${id}.jpg`} alt="" />
        <h2>{title}</h2>
      </div>
      
      <nav className="subNav">
        <div className="wrap">
          <ul>
            {
              menu.map((a, i) => {
                return (
                  <li className={tap == url[i] ? "on" : ""}><Link to={`/${id}/${url[i]}`}>{ a }</Link></li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Banner;