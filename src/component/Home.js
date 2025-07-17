import React from 'react'
import './Home.css'
import A from "../images/c1.png"
import B from "../images/c4.png"
import C from "../images/c3.png"
import D from "../images/c2.png"
import E from "../images/i1.png"
import F from "../images/i2.png"
import G from "../images/i3.png"
import H from "../images/i4.png"
import I from "../images/i51.png"
import J from "../images/i61.png"
import K from "../images/p1.png"
import L from "../images/p2.png"
import M from "../images/p3.png"
import N from "../images/i11.png"
import O from "../images/i12.png"
import P from "../images/i13.png"
import Q from "../images/i14.png"



const Home = () => {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={A} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={B} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={C} class="d-block w-100" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src={D} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"/>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="d-flex pt-4">
  <div class="container C">
  <div class="row">
    <div class="col">
      <div class="card">
        <h1 class="sample1">OFFERS</h1>

        <div class="card-body">
    <h2>Since 2014</h2>
    <p>Passionately Baking Since 2014 with Multiple outlets in Erode, Perundurai and Tiruchengode</p>
    
    <p class="card-text">outlets in Erode, Perundurai and Tiruchengode</p>

<h2>Since 2014</h2>
<p>Passionately Baking Since 2014 with Multiple outlets in Erode, Perundurai and Tiruchengode</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>


<div class="container D">
  <div class="row">
    <div class="col">
      <img src={E} width="200px" height="200px"/>
    </div>
    <div class="col">
      <img src={F} width="200px" height="200px"/>
    </div>
    <div class="col pt-1">
      <img src={G} width="200px" height="200px"/>
    </div>
     
  </div>
  <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={H} width="200px" height="200px"/>
    </div>
    <div class="col pb-4">
      <img src={I} width="200px" height="200px"/>
    </div>
    <div class="col pb-4">
      <img src={J} width="200px" height="200px"/>
    </div>
  </div>
</div>
</div>
</div>




<div class="F">
  <h1 class="E pt-4">Our Categories</h1>
<div class="container">
  <div class="row">
    <div class="col pt-5 pb-4">
      <img src={K} width="400px" height="400px"/>
      <div>
        <h1 class="E pt-2">Creative cakes</h1>
      </div>
    </div>
    <div class="col pt-5">
       <img src={L} width="400px" height="400px"/>
       <div>
        <h1 class="E pt-2">Signature cakes</h1>
       </div>
    </div>
    <div class="col pt-5">
       <img src={M} width="400px" height="400px"/>
       <div>
        <h1 class="E pt-2">Regular cakes</h1>
       </div>
    </div>
  </div>
</div>
</div>


<div class="G">
<h1 class="g1">Order For Same Day & Midnight</h1>
<p class="g2">Gone are those days when a simple phone call was enough to wish someone on their special day. Things have changed since then and now it comes along <br/>with ordering online a cake and uplifting spirits on their special day</p>
<div class="container">
  <div class="row pt-4 pb-4">
    <div class="col a">
      <div class="card text-container">
        <div>
  <img src={N} width="100%" height="100%" class="pic" alt="..."/>
  </div>
  <p class="text">
    Chocolate Roses
  </p>
  
</div>
    </div>
    <div class="col">
          <div class="card text-container">
  <img src={O} width="100%" height="100%" class="pic" alt="..."/>
 <p class="text">
  Sugar N Sparrow
  </p>
</div>
    </div>
    <div class="col">
            <div class="card text-container">
  <img src={P} width="100%" height="100%" class="pic" alt="..."/>
 <p class="text">
    Marble
  </p>
</div>
    </div>
    <div class="col pt-2">
            <div class="card text-container">
  <img src={Q} width="100%" height="100%" class="pic" alt="..."/>
 <p class="text">
    Caramel
  </p>
</div>
    </div>
  </div>
</div>
<button class="g3">View more</button>
</div>

<div>
<h1 class="H">Testimonials</h1>
<p class="H1">Hey guys after long time I here to post my review. The upcoming bakery in erode was THE CAKE SHOP<br/> one of the most famous shop in erode. They are starting their third new branch near solar in erode. I suggest <br/>u all to have a try there if u got the chance the cake was so amazing. I got the complete taste <br/>of it. I even gave a try on their new dish named Chicky Shaw that was soo tasty and crunchy at their ELITE</p>
<h4 class="H2">Chinnu Mary Ann</h4>
</div>



    </div>
  )
}

export default Home