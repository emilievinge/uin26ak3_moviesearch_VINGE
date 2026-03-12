import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home(){
    const [search, setSearch] = useState()
    const [focused, setFocused] = useState(false)

    const [movie, setMovie] = useState()

    //console.log("Denne kommer fra storage", storedHistory)
    
    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    // GJØR DETTE!!! API key skal ikke ligge "offentlig".
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async()=>{
        try
        {
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)
        }
        catch(err)
        {
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()

        // setHistory((prev) => [...prev, search])

    }

    return (
        <main>
            <h1>Forside</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Søk etter film
                    <input  type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={()=> setFocused(true)} /*onBlur={()=> setFocused(false)}*/></input>
                </label>
    
                <button onClick={getMovies}>Søk</button>
            </form>
            <section>
                    {movie?.Search?.map((movie) => {
                        <article key={movie?.imdbID} >
                            <h3>Tittel: {movie?.Title}</h3>
                            <img src={movie.Poster}/>
                        </article>})}
            </section>
            <footer>Movie search 2026</footer>
        </main>
    )
}