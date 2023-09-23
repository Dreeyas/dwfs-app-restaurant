import React from 'react'
import { BsGeoAltFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/*left side*/}
            <div className="flexColStart f-left">
                <img src='./whitelogo.png' alt="logo"/>
                
            </div>
            {/*right side*/}
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'><BsGeoAltFill color="var(--purple)" size={15} /> 123 Someplce, City, Country </span>
                <span className='secondaryText'><BsTelephoneFill color="var(--purple)" size={15} /> + 01 2 345 6789</span>
                <span className='secondaryText'><BsEnvelopeAtFill color="var(--purple)" size={15} /> mitsuitosramen@food.com </span>
                <div className="social">
                  <BsInstagram color="var(--purple)" size={15}></BsInstagram>
                  <BsTwitter color="var(--purple)" size={15}></BsTwitter>
                  <BsFacebook color="var(--purple)" size={15}></BsFacebook>
                  <BsPinterest color="var(--purple)" size={15}></BsPinterest>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
