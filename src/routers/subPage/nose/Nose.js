import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
  
function Nose() {
  let { id } = useParams();
  
  return (
    <>
      <div className="wrap">
        <img style={id == "6" ? { marginTop: '50px', width: "100%" } : { marginTop: '0px', width: "100%" }} src={`/img/subPage/nose/nose0${id}_content.jpg`} alt="" />
      </div>
    </>
  )
}

export default Nose;