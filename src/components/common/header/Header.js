import react, { useState, useEffect } from "react";
import { Route, Link, useParams } from "react-router-dom";

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
          <MenuLists MenuList={ MenuList } MenuBox={ setMenuBox }></MenuLists>
        </div>
      </nav>

      <nav className="menu mobile">
        <div className={menuBox == false ? "button" : "button view"} onClick={()=>{setMenuBox(!menuBox)}}>
          <i class="fas fa-bars"></i>
        </div>

        <div className={menuBox == false ? "bg" : "bg view"} onClick={()=>{setMenuBox(false)}}></div>
        
        <div className={menuBox == false ? "menuBox" : "menuBox view"}>
          <MenuLists MenuList={ MenuList } MenuBox={ setMenuBox }> </MenuLists>
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
          // <li><Link onClick={()=>{props.MenuBox(false)}} to={ `/${a.url}` }>{ a.name }</Link></li>
          <li><Link onClick={()=>{alert("준비중입니다.")}}>{ a.name }</Link></li>
        )
      })
    }
  </ul>
  )
}

export default Header;