import axios from "axios"

export const fetchCategoriesApi = async () => {
    try {
        const data = await axios.get("https://api.chucknorris.io/jokes/categories");

        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}


export const fetchRandomEnglishJoke = async () => {
    try {
        const data = await axios.get("https://api.chucknorris.io/jokes/random");
        return data
    } catch (error) {
        throw error
    }
}


export const fetchCategoriesSearchApi = async (queryInput) => {
    try {
        const data = await axios.get(`https://api.chucknorris.io/jokes/search?query=${queryInput}`)
        return data
    } catch (error) {
        throw error
    }
}


export const fetchHindiJokeApi = async () => {
    try {
        const { data } = await axios.get("https://hindi-jokes-api.onrender.com/jokes/1?api_key=0d4ad6a74d3e7917a31edf13618d");
        return data
    } catch (error) {
        throw error
    }
}