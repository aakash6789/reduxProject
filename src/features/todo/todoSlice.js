import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{
                return todo.id!==action.id;
            })
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.id){
                 todo.text=action.payload;
                }
                return todo;
            })
        }
    }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;