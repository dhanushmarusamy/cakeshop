import React from 'react'
import { ToastContainer ,toast } from 'react-toastify';

const Upload = () => {

    const handleSubmit=(event)=>{

        event.preventDefault();
        
        const form=event.target;
        const title=form.title.value;
        const img=form.img.value;
        const food=form.food.value;
        const price=form.price.value;
    

        if(title==="" || img===""   || price==="" || food==="" )
        {
            toast.warn('fill Required ');
        }else{
            const foods={title,img,price,food};
            // console.log(foods,"foods in object ");
            
            fetch('http://localhost:6200/cakeshop',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(foods),
            })
            // .then((res)=>res.json())
            .then((data)=>{
                toast.success('added successfully');
                form.reset();
                window.location.href="/m"
            }
            )

        }

        }

  return (
 <div>
                <ToastContainer/>
              <div class="card upload6">
         <div class="card-body upload5">
        <form onSubmit={handleSubmit} >
            <h2>UPLOAD</h2>
            <div class="upload0">
                <label value="title"><b>Title</b></label>
                <input type="text" name="title" className='ms-3'/>
            </div><br></br>
            <div class="upload1">
                <label value="img"><b>Image</b></label>
                <input type='img' name="img" className='ms-3'/>
                </div><br></br>
                
                 <div class="upload3">
                <label value="food"><b>FOOD</b></label>
                <input type='numbers' name="food" className='ms-3'/>
                </div><br></br>
                <div class="upload4">
                <label value="price"><b>Price</b></label>
                <input type='numbers' name='price' className='ms-3'/>
            </div><br></br>

            <div class="upload7">
                <button type="submit" class="btn btn-primary">upload</button>
                
            </div>
        </form>
        </div>
        </div>
    </div>  )
}

export default Upload