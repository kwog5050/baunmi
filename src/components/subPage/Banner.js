import react, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import { MenuList } from "../common/header/data";

import "../../sass/subPage/banner.scss"

function Banner() {

  let { id, tap } = useParams();
  
  let menu = null;
  let url = null;
  let title = null;

  switch (id){
    case "why":
      title = MenuList[0].name;
      menu = MenuList[0].subMenu;
      url = MenuList[0].subUrl;
      break;
    case "introduction":
      title = MenuList[1].name;
      menu = MenuList[1].subMenu;
      url = MenuList[1].subUrl;
      break;
    case "nose":
      title = MenuList[2].name;
      menu = MenuList[2].subMenu;
      url = MenuList[2].subUrl;
      break;
    case "neck":
      title = MenuList[3].name;
      menu = MenuList[3].subMenu;
      url = MenuList[3].subUrl;
      break;
    case "ear":
      title = MenuList[4].name;
      menu = MenuList[4].subMenu;
      url = MenuList[4].subUrl;
      break;
    case "safe":
      title = MenuList[5].name;
      menu = MenuList[5].subMenu;
      url = MenuList[5].subUrl;
      break;
    case "contact":
      title = MenuList[6].name;
      menu = MenuList[6].subMenu;
      url = MenuList[6].subUrl;
      break;
    default:
      break;
  }
  return (
    <>
      <div className="banner">
        <img src={`/img/subPage/${id}/banner.jpg`} alt="" />
        <h2>{title}</h2>
      </div>
      
      {
        menu == ""
          ? null
          :<nav className="subNav">
          <div className="wrap">
            <ul className="pc">
              {
                menu.map((a, i) => {
                  return (
                    <li key={i} className={tap == url[i] ? "on" : ""}><Link to={`/${id}/${url[i]}`}>{ a }</Link></li>
                  )
                })
              }
            </ul>
            <ul className="mobile">
              <li>
                  <ol>
                    {
                      MenuList.map((a, i) => {
                        return (
                          <li key={i}><Link>{ a.name }</Link></li>
                        )
                      })
                    }
                </ol>
              </li>
              <li>
                  <ol>
                    {
                      menu.map((a, i) => {
                        return (
                          <li><Link to={`/${id}/${url[i]}`}>{ a }</Link></li>
                        )
                      })
                    }
                </ol>
              </li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default Banner;