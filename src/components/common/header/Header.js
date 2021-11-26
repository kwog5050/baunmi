import react, { useState } from "react";
import { Route, Link } from "react-router-dom";

import {MenuList} from "./data.js";

function Header() {

  let [menuBox, setMenuBox] = useState(false);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/img/hd_logo.png" alt="" />
      </Link>
      <nav className="menu pc">
        <div className="wrap">
          <MenuLists MenuList={ MenuList }></MenuLists>
        </div>
      </nav>

      <nav className="menu mobile">
        <div className={menuBox == false ? "button" : "button view"} onClick={()=>{setMenuBox(!menuBox)}}>
          <i class="fas fa-bars"></i>
        </div>

        <div className={menuBox == false ? "bg" : "bg view"} onClick={()=>{setMenuBox(false)}}></div>
        
        <div className={menuBox == false ? "menuBox" : "menuBox view"}>
          <MenuLists MenuList={ MenuList }></MenuLists>
        </div>
      </nav>
    </header>
  )
}

function MenuLists(props) {
  return (
    <ul>
    {
      props.MenuList.map((a, i) => {
        return (
          <li><Link to={ a.url }>{ a.name }</Link></li>
        )
      })
    }
  </ul>
  )
}

export default Header;