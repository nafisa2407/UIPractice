import {createSlice} from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
  },
  reducers: {
    //Add multiple actions into it
    addTodo(state, action) {
      //state.data = [1, 2, 3];
      state.data.push(action.payload);
    },
    deleteTodo(state, action) {
      let tempData = state.data;
      let newData = tempData.filter((item, index) => {
        return index !== action.payload;
      });
      state.data = newData;
    },
    editTodo(state, action) {
      let tempData = state.data;
       tempData.map((item, index) => {
        if(action.payload.index == index){
          item.title = action.payload.title;
          item.desc = action.payload.desc;
        }
        
      });
      state.data = tempData;
    },
    
  },
});

export const {addTodo,deleteTodo,editTodo} = TodoSlice.actions;
export default TodoSlice.reducer;

