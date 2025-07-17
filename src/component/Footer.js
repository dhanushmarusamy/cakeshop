import React from 'react'
import {Link}  from "react-router-dom"
import './Footer.css'
import X from "../images/Cake-shop-logo.png"
import n1 from "../images/paypal.png"
const Footer = () => {
  return (
    <div>
        <div class="i">
<div class="container">
  <div class="row">
    <div class="col">
         <Link to="/">
    <img class="I" src={X} width="300rem"/>
    </Link>
    </div>
    <div class="col">
    <h1 class="i1">Important</h1>
    <h5>Refund Policy</h5>
    <h5>Contact Us</h5>
    <h5>Privacy Policy</h5>
    <h5>Terms of Services</h5>
    </div>
    <div class="col">
      <h1 class="i1">Safe Payments</h1>
      <h5>Secure Connection</h5>
      <h5>MasterCard</h5>
      <h5>VISA</h5>
      <h5> Cash on Delivery</h5>
      <img  src={n1} width="100px" height="50px"/>
    </div>
  </div>
</div>
</div>
    
    </div>
  )
}

export default Footer