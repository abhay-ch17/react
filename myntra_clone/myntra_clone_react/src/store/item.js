import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name:'item',
    initialState:[{id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.5,
            count: 1400,
        }},],
        reducers:{
            apiItem:(state, action)=>{
                return state = action.payload;
                // console.log(state);
            }
        }

    })


    export const itemAction = itemSlice.actions;
    export default itemSlice