import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'productList',
  initialState: {
    data: [{name:'Nafisa',number:'Hasan', email:'mscc'},{name:'Sarfaraz',number:'Hasan', email:'mscc'},{name:'Maraz',number:'Hasan', email:'mscc'}],
  },
  reducers: {
    //Add multiple actions into it
    addProduct(state, action) {
      //state.data = [1, 2, 3];
      state.data.push(action.payload);
    },
    deleteProduct(state, action) {
      let tempData = state.data;
      let newData = tempData.filter((item,index) => {
console.log('index',index)
console.log('action.payload',action.payload)

        return index !== action.payload;
      });
      console.log("i m in delete",newData)

      state.data = newData;
    },
    editProduct(state, action) {
      console.log('i m i neditR',action.payload)
      let tempData = state.data;
       tempData.map((item, index) => {
        if(action.payload.index == index){
          console.log('action.payload.name;>',action.payload.name)
          item.name = action.payload.name;
          item.number = action.payload.number;
          item.email = action.payload.email;
        }   
      });
      state.data = tempData;
    },
    
  },
});

export const {addProduct,deleteProduct,editProduct} = ProductSlice.actions;
export default ProductSlice.reducer;

