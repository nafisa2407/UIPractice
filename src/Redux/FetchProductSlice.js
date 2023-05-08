const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk('fetchData', async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
    const result = await res.json();
    return result;
});

export const FetchProductSlice = createSlice({
    name:'items',
    initialState:{
        data:[],
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
          state.isLoading=true;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading= false;
            state.data = action.payload;
            state.isError = false;

          });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading= false;
            state.isError = true;
          });
      },
})

export default FetchProductSlice.reducer;