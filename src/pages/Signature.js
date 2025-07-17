import React from 'react'
import './Signature.css'
import s19 from '../images/s19.jpg'
import s20 from '../images/s20.jpg'
import s21 from '../images/s21.jpg'
import s22 from '../images/s22.jpg'
import s23 from '../images/s23.jpg'
import s24 from '../images/s24.jpg'
import s25 from '../images/s25.jpg'
import s26 from '../images/s26.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFromCart,updateQuantity,addTocart } from '../Redux/Cartslice';

const Signature = () => {

   const cartitems=useSelector((state)=>state.cart.cartitems);
    const dispatch=useDispatch();
    console.log(cartitems,"data in ")
    const addCart=(item)=>{
          dispatch(addTocart(item))
      }
    const deleteCart=(item)=>{
          dispatch(deleteFromCart(item))
      }

      const incrementCart=(id,quantity)=>{
         dispatch(updateQuantity({id,  quantity : quantity+1}))
      }

  const decrementCart=(id,quantity)=>{
    if(quantity>1){
      dispatch(updateQuantity(
        {id, quantity : quantity-1}
      )
      )
    }
  }
  const signature=[
    {
      id:1,
      img:s19,
      title:"Gulab Jamun Cake",
      quantity:10,
    },
      {
      id:2,
      img:s20,
      title:"Death By Chocolate",
      quantity:2,
    },
     {
      id:1,
      img:s21,
      title:"CLASSIC RED VELVET",
      quantity:3,
    },
     {
      id:1,
      img:s22,
      title:"SAFRON CAKE",
      quantity:4,
    },
   
  ]

  const cake=[
    {
      id:4,
      img:s23,
      title:"",
    }
  ]

  return (
    <div>
        <div>
    <h1 class="j">Signature</h1>
    <div class="container">
  <div class="row pt-4">
    {
      signature.map((a)=>(
         <div class="col" key={a.id}>
      <img src={a.img} width="300px" height="250px"/>
      <div class="S">
        <h4>{a.title}</h4>
        {
          // cartitems.find()
        }
              
           <button class="btn btn-danger cartbutton" onClick={()=>deleteCart(a)} >RemoveFromCart </button>
                                  

                                    <button class="btn btn-danger cartbutton"  onClick={()=>addCart(a)} > Add To Cart </button>
                                  
        <button onClick={()=>{decrementCart(a.id,a.quantity)}}>-</button>
                {a.quantity}
        <button onClick={()=>{incrementCart(a.id,a.quantity)}} >+</button>
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


<div class="container">
  <div class="row pt-4">
    
    <div class="col">
      <img src={s23} width="300px" height="250px"/>
       <div class="S">
        <h4>Chocolate Tres Leches</h4>
        <button>Order Now</button>
      </div>
    </div>
    <div class="col">
      <img src={s24} width="300px" height="250px"/>
       <div class="S">
        <h4>BELGIUM CHOCOLATE</h4>
        <button>Order Now</button>
      </div>
    </div>
    <div class="col">
      <img src={s25} width="300px" height="250px"/>
       <div class="S">
        <h4>Caramel BISCOFFI</h4>
  
        <button>Order Now</button>
      </div>
    </div>
     <div class="col">
      <img src={s26} width="300px" height="250px"/>
       <div class="S">
        <h4>Rasamalai Cake</h4>
        <button>Order Now</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )

}
export default Signature