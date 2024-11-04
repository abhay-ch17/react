import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'bag',
    initialState:[],
        reducers:{
            addItem:(state, action)=>{
                state.push(action.payload);
            },
            removeItem:(state, action)=>{
                return state.filter(item=>{
                    if(item.id===action.payload){
                        return 
                    }
                    return item;
                })
            }
        }
})

export const bagAction = bagSlice.actions;
export default bagSlice