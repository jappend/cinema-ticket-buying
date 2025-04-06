import React, { useState } from "react"
import { MovieList } from "../data/movieList"
import { useParams } from "react-router"
import NotFound from "./NotFound";

function MovieDummy() {
  const { slug } = useParams();
  const [ movieDetails, setMovieDetails ] = useState<any>(null);
  const [ loading, setLoading ] = useState<boolean>(true);

  React.useEffect(() => {
    const movieFound = MovieList.find((movie) => slug === movie?.slug)

    if (movieFound) {
      setMovieDetails(movieFound)
    }

    setLoading(false)
  }, [slug])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ): movieDetails ? (
        <>
          <h1 className="text-xl font-bold">{movieDetails.title}</h1>
          <div className="flex flex-col items-center">
            <img src={movieDetails.poster} alt="Movie Poster" className="w-[200px] pb-[15px]" />
            <p>{movieDetails.desc}</p>
            <p>{movieDetails.showTime}</p>
            <p>{movieDetails.room}</p>
            <button className="max-w-[200px]">Buy a ticket</button>
          </div>
        </>
      ): (
        <NotFound />
      )}
    </div>
  )
}

export default MovieDummy 
