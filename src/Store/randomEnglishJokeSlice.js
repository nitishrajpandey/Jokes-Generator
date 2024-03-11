import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRandomEnglishJoke } from "../Api/fetchApi";

// create action for random english jokes api call
export const fetchRandomEnglishJokes = createAsyncThunk("fetchRandomEnglishJoke", async () => {
    const { data } = await fetchRandomEnglishJoke();
    console.log(data);
    return data
})



export const randomEnglishJokeSlice = createSlice({
    name: "randomEnglishJoke",
    initialState: {
        randomJoke: [],
        loding: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomEnglishJokes.fulfilled, (state, action) => {
                state.randomJoke = action.payload,
                    state.loding = false
            }).addCase(fetchRandomEnglishJokes.pending, (state, action) => {
                state.loding = true
            })
    }
})

export default randomEnglishJokeSlice.reducer