import { Link } from "react-router";
import { Movie } from "../data/movieList";

function MovieCard({title, desc, showTime, room, releaseYear, slug, poster}: Movie): React.ReactElement {
  return (
    <Link to={{ pathname: slug }}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out">
        <img src={poster} alt="Movie Poster" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">{title} ({releaseYear})</h2>
          <p className="text-gray-600 text-sm mt-2">{desc}</p>
          <p className="flex w-full justify-center mt-4 text-sm text-gray-600">{showTime}</p>
          <p className="flex w-full justify-center mt-4 text-sm text-gray-600">{room}</p>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
