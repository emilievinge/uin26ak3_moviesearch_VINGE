import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {

  const [movies, setMovies] = useState()

  return (
    <Routes>
      <Route index element={<Home movies={movies} setMovies={setMovies} />} />
      <Route path=":movie" element={<Movie movies={movies} />} />
    </Routes>
  )
}

export default App