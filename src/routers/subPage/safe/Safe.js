import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
  
function Safe() {
  let { id } = useParams();
  
  return (
    <>
      <div className="wrap">
        <img style={{ marginTop: '50px' ,width:'100%'}} src={`/img/subPage/safe/safe0${id}_content.jpg`} alt="" className="pcimg"/>
        <img style={{ marginTop: '50px' ,width:'100%'}} src={`/img/subPage/safe/mobile/safe0${id}_content.jpg`} alt="" className="moimg"/>
      </div>
    </>
  )
}

export default Safe;