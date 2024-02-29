


const apiKey = "15d2ea6d0dc1d476efbca3eba2b9bbfb";
const langIso = "es-ES";
const baseUrl = "https://api.themoviedb.org/3/";

const movieListUrl =`${baseUrl}/movie/top_rated?language=${langIso}&api_key=${apiKey}`

fetch(movieListUrl)
    .then((response) => response.json())
    .then((response) => {
        response?.results?.forEach((movieData) => {
            // const { id, title, overview } = movieData;
            // console.log({ id, title, overview});
            const title = movieData.title
            console.log(title)
        })
    })