import { configureStore } from "@reduxjs/toolkit"
import navbarReducer from "./navbarSlice"
import randomEnglishJokeReducer from "./randomEnglishJokeSlice"
import categoriesSearchReducer from "./categoriesSearchSlice"
import hindiJokesReducer from "./hindiJokesSlice"
const myStore = configureStore({
    reducer: {
        navbar: navbarReducer,
        randomEnglishJoke: randomEnglishJokeReducer,
        categoriesSearch: categoriesSearchReducer,
        hindiJokes: hindiJokesReducer
    }
})

export default myStore