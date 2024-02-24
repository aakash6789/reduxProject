import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice.js";
export const store=configureStore({
    reducer:todoSlice
})