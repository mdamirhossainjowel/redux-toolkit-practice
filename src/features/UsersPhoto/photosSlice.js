import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchphotos = createAsyncThunk(
  "users_photo/fetchPhotos",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return res.data;
  }
);

export const photosSlice = createSlice({
  name: "users_photo",
  initialState: {
    isLoading: false,
    photos: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchphotos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchphotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
      state.error = null;
    });
    builder.addCase(fetchphotos.rejected, (state, action) => {
      state.isLoading = false;
      state.photos = [];
      state.error = action.error.message;
    });
  },
});

export default photosSlice.reducer