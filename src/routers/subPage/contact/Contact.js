import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
  
function Contact() {
  let { id } = useParams();
  
  return (
    <>
      <div className="wrap">
        <img style={{ width:'100%'}} src={`/img/subPage/contact/contact0${id}_content.jpg`} alt="" className="pcimg"/>
        <img style={{ width:'100%'}} src={`/img/subPage/contact/mobile/contact0${id}_content.jpg`} alt="" className="moimg"/>
      </div>
    </>
  )
}

export default Contact;