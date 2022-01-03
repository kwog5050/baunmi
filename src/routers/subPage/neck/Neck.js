import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
  
function Neck() {
  let { id } = useParams();
  
  return (
    <>
      <div className="wrap">
        <img style={{ marginTop: '50px' ,width:'100%'}} src={`/img/subPage/neck/neck0${id}_content.jpg`} alt="" />
      </div>
    </>
  )
}

export default Neck;