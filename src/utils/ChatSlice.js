import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_TOTAL_MSG_COUNT_OFFSET } from "./constants";

const ChatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMEssage:(state,action)=>{
            if(state.message.length >= 20){
                state.message.shift();
            }
            // state.message.splice(LIVE_CHAT_TOTAL_MSG_COUNT_OFFSET,1);
            state.message.push(action.payload);
        }
    }
});
export const {addMEssage} = ChatSlice.actions;
export default ChatSlice.reducer;