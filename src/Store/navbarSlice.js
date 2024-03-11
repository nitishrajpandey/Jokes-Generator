import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesApi } from "../Api/fetchApi";

// create action for categories api call

export const fetchedCategories = createAsyncThunk("fetchCategories", async () => {
    const { data } = await fetchCategoriesApi();
    return data
})






// creating slice for navbar
export const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        categoriesNames: [],
        categoriesToggle: false
    },
    reducers: {
        ToggleCategories: (state) => {
            state.categoriesToggle = !state.categoriesToggle
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedCategories.fulfilled, (state, action) => {
                state.categoriesNames = action.payload
            })
    }
})

export const { ToggleCategories } = navbarSlice.actions

export default navbarSlice.reducer