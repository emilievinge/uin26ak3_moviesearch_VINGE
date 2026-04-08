import { useParams } from "react-router-dom"

export default function Movie({movies}){
    const {movie} = useParams()
    
    // Kilde til hvordan filmen vises etter man har trykket på den etter søk:
    // https://chatgpt.com/share/69d64600-b89c-832c-80a9-a0acf5fde98d
    const selectedMovie = movies?.Search?.find(
        (m) => m.imdbID === movie
    )

    return (
        <main>

            <h1>{selectedMovie?.Title}</h1>

            <img
                src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "/no-image.jpg"} 
                alt={selectedMovie?.Title}
            />

            <p>Utgivelsesår: {selectedMovie?.Year}</p>

        </main>
    )
}