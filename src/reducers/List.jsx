import { createSlice } from "@reduxjs/toolkit";


 const listSlice = createSlice({
    name: 'my list', 
    initialState: [], 
    reducers: {
        addToList: (state, action)=> {
            state.push(action.payload)

        }, 
        removeFromList: (state, action)=> {
            state.splice(action.payload, 1)
        }
    }
 })

 export const {addToList, removeFromList} = listSlice.actions 

 export default listSlice.reducer