import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todo',
    initialState:{list:['read book']},
    reducers:{
        addTodo:(state, action)=>{
            console.log(state);
        },
        removeTodo:(state, action)=>{}
    }
})

const store = configureStore({reducer:{
    todo:todoSlice.reducer
}})

export const todoAction = todoSlice.actions;
export default store;