import MovieCard from "../components/MovieCard"
import { MovieList } from "../data/movieList"

function Movies() {
  return (
    <div>
      <h1 className="text-xl font-bold">Movies in Display This Week</h1>
      <p className="mb-[10px]">
        Here you have all the movies in display at our cinema this week.
        Just select one and buy a ticket so you can see it!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MovieList.map((movie, index) => {
          return (
            <MovieCard key={index} poster={movie.poster} slug={movie.slug} title={movie.title} desc={movie.desc} releaseYear={movie.releaseYear} showTime={movie.showTime} room={movie.room}/>
          )
        })}
      </div>
    </div>
  )
}

export default Movies 
