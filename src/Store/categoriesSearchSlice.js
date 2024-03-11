import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesSearchApi } from "../Api/fetchApi";


export const fetchCategoriesSearch = createAsyncThunk("fetchCategoriesSearchs", async (queryInput = "animal") => {
    const { data } = await fetchCategoriesSearchApi(queryInput)
    return data.result
})



export const categoriesSearchSlice = createSlice({
    name: "categoriesSearch",
    initialState: {
        categoriesSearchData: [],
        loding: true
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoriesSearch.fulfilled, (state, action) => {
                state.categoriesSearchData = action.payload,
                    state.loding = false
            }).addCase(fetchCategoriesSearch.pending, (state, action) => {
                state.loding = true
            })
    }

})


export default categoriesSearchSlice.reducer