import { createSlice } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheResult:(state,action)=>{
           state = Object.assign(state, action.payload);
        },
         
    }
})
export const {cacheResult} = searchSlice.actions
export default searchSlice.reducer;