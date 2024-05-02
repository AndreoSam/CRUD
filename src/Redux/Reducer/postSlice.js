import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url, user_url } from "../../Api/apiUrl";

const api_url = base_url + user_url;
// console.log(api_url);

export const fetchPost = createAsyncThunk("post/fetchpost", async () => {
    const res = await axios.get(api_url);
    console.log("Axios response for posts url: ", res);
    return res?.data;
})

const initial_value = {
    loading: false,
    postValue: [],
    error: null,
}

export const postSlice = createSlice({
    name: "post",
    initialState: initial_value,
    //work as middleware for handling asynchronous action

    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(fetchPost.fulfilled, (state, action) => {
            console.log("Action for fullfilled", action);
            state.loading = false;
            state.postValue = action.payload;
            state.error = null;
        })

        builder.addCase(fetchPost.rejected, (state, action) => {
            console.log("Action for rejected", action);
            state.loading = false;
            state.postValue = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;