import { createSlice } from '@reduxjs/toolkit'

export const todoSlicer = createSlice({
  name: 'todo',
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
     state.task = [...state.task,action.payload];
    },
    deleteTask:(state,action) => {
      state.task = [
        ...state.task.slice(0, action.payload),
        ...state.task.slice(action.payload + 1),
      ];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask,deleteTask } = todoSlicer.actions
//export const taskValue = (state) => state.todo.task;

export default todoSlicer.reducer