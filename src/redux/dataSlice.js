import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchInstanceList = createAsyncThunk("fetchInstanceList", async () => {
    
    const params = {
        page: 0,
        size: 200,
      };
      const headers = {
        'Content-Type': 'application/json', // Adjust the content type based on your needs
        'Authorization': '1b218a63ee4a017844636cb5578c345a', // Replace 'YourAccessToken' with the actual token
      };
      console.log("hello3");
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log("hello1");
    // //   await new Promise((resolve) => setTimeout(resolve, 1)); //fake api call
      
    // //   console.log(response.data.data.instances);

    // //    Promise.resolve(response.data.data.instances);
    //    return response.data.data.instances;

    // const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    
    console.log("hello", res.data)
    return res.data;
 });

const dataSlice = createSlice({
  name: 'instanceList',
  initialState: {
    isLoading: false,
    data: [],
    isError: false
   },
  extraReducers: (builder) => {
   builder.addCase(fetchInstanceList.pending, (state, action) => {
    state.isLoading = true;
   })
   builder.addCase(fetchInstanceList.fulfilled, (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
   })
   builder.addCase(fetchInstanceList.rejected, (state, action) => {
    state.isError = true;
   })
  }

})

export const { updateData } = dataSlice.actions
export default dataSlice.reducer