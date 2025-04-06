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
    <div className="pl-[30px] pr-[30px]">
      {loading ? (
        <p>Loading...</p>
      ): movieDetails ? (
        <>
          <h1 className="text-xl font-bold">{movieDetails.title}</h1>
          <button className="bg-blue-900 text-white font-semibold p-[5px] pl-[10px] pr-[10px] cursor-pointer rounded-xl">Buy a ticket</button>
        </>
      ): (
        <NotFound />
      )}
    </div>
  )
}

export default MovieDummy 
