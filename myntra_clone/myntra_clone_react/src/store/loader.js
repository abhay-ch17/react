import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name:'loader',
    initialState:true,
    reducers:{
        loader:(state, action)=>{
            return state = action.payload;
        }
    }
})

export const loaderAction = loaderSlice.actions;
export default loaderSlice