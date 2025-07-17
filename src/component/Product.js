import React from 'react'
import { useSelector } from 'react-redux'


const Product = () => {
       const cartitems=useSelector((state)=>state.cart.cartitems);
       console.log(cartitems,"data in redux")

  return (
    <div>
            <div>
        <div>
    <h1 class="j">Signature</h1>
    <div class="container">
  <div class="row pt-4">
    {
      cartitems.map((a)=>(
         <div class="col" key={a.id}>
      <img src={a.img} width="300px" height="250px"/>
      <div class="S">
        <h4>{a.quantity}</h4>
              
           {/* <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(a)} >RemoveFromCart </button>
                                  

                                    <button class="btn btn-danger cartbutton"  onClick={()=>addCart(a)} > Add To Cart </button>
                                  
        <button onClick={()=>{decrementCart(a.id,a.quantity)}}>-</button>
                {a.quantity}
        <button onClick={()=>{incrementCart(a.id,a.quantity)}} >+</button> */}
      </div>
    </div>
      ))
    }
    {/* <div class="col">
      <img src={s19} width="300px" height="250px"/>
      <div class="S">
        <h4>Gulab Jamun Cake</h4>
        <button>Order Now</button>
      </div>
    </div> */}
    {/* <div class="col">
      <img src={s20} width="300px" height="250px"/>
       <div class="S">
        <h4>Death By Chocolate</h4>
        <button>Order Now</button>
      </div>
    </div>
    <div class="col">
      <img src={s21} width="300px" height="250px"/>
       <div class="S">
        <h4>CLASSIC RED VELVET</h4>
        <button>Order Now</button>
      </div>
    </div>
     <div class="col">
      <img src={s22} width="300px" height="250px"/>
       <div class="S">
        <h4>SAFRON CAKE</h4>
        <button>Order Now</button>
      </div>
    </div> */}
  </div>
</div>


</div>
</div>
    </div>
  )
}

export default Product