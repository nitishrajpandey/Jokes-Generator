import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHindiJokeApi } from "../Api/fetchApi";


export const fetchHindiJokesApi = createAsyncThunk("fetchHindiJokes", async () => {
    const data = await fetchHindiJokeApi();
    return data
})







export const hindiJokeSlice = createSlice({
    name: "hindiJokes",
    initialState: {
        jokeStore: [],
        loding: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHindiJokesApi.fulfilled, (state, action) => {
                state.jokeStore = action.payload,
                    state.loding = false
            }).addCase(fetchHindiJokesApi.pending, (state, action) => {
                state.loding = true
            })
    }

})

export default hindiJokeSlice.reducer