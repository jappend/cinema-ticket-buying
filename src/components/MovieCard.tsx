import { Link } from "react-router";
import { Movie } from "../data/movieList";

function MovieCard({title, desc, showTime, room, releaseYear, slug}: Movie): React.ReactElement {
  return (
    <Link to={{ pathname: slug }}>
      <div className="border border-[2px] w-full minh-[150px] p-[10px] rounded-xl cursor-pointer mb-[10px]">
        <h1 className="text-2xl font-semibold">{title} ({releaseYear})</h1>
        <p>{desc}</p>
        <p className="text-blue-900">{showTime}</p>
        <p className="text-blue-900">{room}</p>
      </div>
    </Link>
  )
}

export default MovieCard
