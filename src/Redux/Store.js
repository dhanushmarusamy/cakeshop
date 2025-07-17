import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Cartslice.js';


export const store=configureStore(
    {
        reducer:{
            cart:CartSlice,

        }
    }
)