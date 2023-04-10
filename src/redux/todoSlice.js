import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name:"todos",
    initialState:{
        items:[]
    },
    reducers:{
        addTodo: function(state,action){
            state.items.push(action.payload);
        },
        deleteTodo: function(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateTodo: function(state, action) {
            state.items.map(item => {
                if(item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.description = action.payload.description;
                }
            })
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions


export default todoSlice.reducer