import { useParams } from "react-router-dom"

export default function Movie({movies}){
    const {movie} = useParams()
    
    // Kilde til hvordan filmen vises etter man har trykket på den etter søk: https://chatgpt.com/c/69b417cc-fd64-8328-aa2e-6a2d927f9c2f
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