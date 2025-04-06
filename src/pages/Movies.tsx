import MovieCard from "../components/MovieCard"
import { MovieList } from "../data/movieList"

function Movies() {
  return (
    <div className="pl-[30px] pr-[30px]">
      <h1 className="text-xl font-bold">Movies in Display</h1>
      <p className="mb-[10px]">
        Here you have all the movies in display at our cinema.
        Just select one and buy a ticket so you can see it!
      </p>

      {MovieList.map((movie, index) => {
        return (
          <MovieCard key={index} slug={movie.slug} title={movie.title} desc={movie.desc} releaseYear={movie.releaseYear} showTime={movie.showTime} room={movie.room}/>
        )
      })}
    </div>
  )
}

export default Movies 
