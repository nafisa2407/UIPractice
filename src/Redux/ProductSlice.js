import {createSlice} from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
  name: 'productList',
  initialState: {
    data: [],
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


        return index !== action.payload;
      });

      state.data = newData;
    },
    editProduct(state, action) {
      let tempData = state.data;
       tempData.map((item, index) => {
        if(action.payload.index == index){
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

