import React from 'react'
import './About.css'
import p5 from '../images/p5.png'
const Shop = () => {
  return (
    <div>
        
    <h1 class="j">About Cake Shop</h1>
    <div class="container">
  <div class="row">
    <div class="col pt-5">
      <p>We at The Cake Shop specialize in Desserts & Cakes. we believe in "Quality in our Edge", from selecting the ingredients around India to the final exqusite creation that "Bring you smiles for Sure</p>
    <p>Our cakes & Desserts receive a lot of compliments and are complimented by wide range of exclusive desserts.</p>
    <p>Our theme based Creative Cakes, Cake pop , Cup Cakes and Desserts for Parities, make you Party Unique and Inevitable. We spend more time in understanding customers expectation,</p>
    <p>So we Perfectly Personalize to the Needs</p>
    </div>
   
    <div class="col pt-4">
    <img src={p5} width="450px" height="550px"/>
    </div>
  </div>
</div>

    </div>
  )
}

export default Shop