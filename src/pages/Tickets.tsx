import React, { useState } from "react"
import { MovieList } from "../data/movieList"
import SeatSelector from "../components/SeatSelector"

function Tickets() {
  const [ name, setName ] = useState<string>('')
  const [ selectedMovie, setSelectedMovie ] = useState<string>('')
  const [ movieList ] = useState<any[]>(MovieList)
  const [ movieRoom, setMovieRoom ] = useState<any>(null)

  React.useEffect(() => {
    const foundMovie = MovieList.find((movie) => movie.slug === selectedMovie)

    setMovieRoom(foundMovie?.room)
  }, [selectedMovie])

  return (
    <div>
      <h1 className="text-xl font-bold">Purchase a Ticket!</h1>
      <p>
        You will use this page to purchase a ticket, just type in your name, select your
        prefered movie, your favorite seat and you're ready to go!
      </p>

      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        id="name"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Ex: John Doe"
        type="text"
        value={name} 
        onChange={e => setName(e.target.value)}
      />

      <label htmlFor="movie" className="block text-sm font-medium text-gray-700">Movie</label>
      <select
        value={selectedMovie}
        onChange={e => setSelectedMovie(e.target.value)}
        id="movieSelect"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200 appearance-none"
      >
        <option value="">Select a movie</option>
        {movieList.map((movie) => (
          <option key={movie.slug} value={movie.slug}>
            {movie.title}, {movie.showTime} ({movie.room})
          </option>
        ))}
      </select>

      <SeatSelector room={movieRoom}/>
    </div>


  )
}

export default Tickets 
