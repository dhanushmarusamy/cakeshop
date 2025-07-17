import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
const Edit = () => {
  const{id}=useParams();

    const [productsItems,setproductsItems]=useState ({
    })

    useEffect(()=>{
     fetch(`http://localhost:6200/getbyid/${id}`)
       .then((res)=>res.json())
       .then((data)=>setproductsItems(data))
      },[])

    const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const title= form.title.value;
    const food=form.food.value;
    const price=form.price.value;
    const img=form.img.value;

    const update={title,food,price,img,};
    console.log(update);

    fetch(`http://localhost:6200/allcakes/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(update),
        })
        .then((res)=>res.json())
        .then((data)=>{
        toast.warn("successfully updated");
        window.location.href="/m";
        })
    } 
  return (
    <div>
      <ToastContainer />
    <div class="card update6">
    <div class="card-body update5">
<form onSubmit={handleUpdate}>
       <h2>EDIT</h2>
       
         <div class="upload0">
                <label value="title"><b>TITLE</b></label>
                <input type="text" name="title" className='ms-3' defaultValue={productsItems.title}/>
            </div><br></br>
            <div class="upload1">
                <label value="img"><b>IMAGE</b></label>
                <input type='img' name="img" className='ms-3' defaultValue={productsItems.img}/>
                </div><br></br>
                <div class="upload2">
                <label value="food"><b>FOOD</b></label>
                <input type='text' name="food" className='ms-3'defaultValue={productsItems.food}/>
                </div><br></br>
                
                <div class="upload3">
                <label value="price"><b>PRICE</b></label>
                <input type='numbers' name='price' className='ms-3' defaultValue={productsItems.price}/>
            </div><br></br>

       <section className='update9'>

       <div class="update7 ms-3">
           <button type="submit" class="btn btn-primary">EDIT</button>
           
       </div>
    </section>
   </form>
   </div>
   </div>
    </div>
  )
}

export default Edit