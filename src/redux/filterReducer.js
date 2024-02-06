import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    key: "",
    order: ""
  },
  reducers: {
    filterValue: (state, action) => {
      state.key= action.payload.key;
      state.order=action.payload.order;
    }
  },
});

export const { filterValue} = filterSlice.actions;

export default filterSlice;