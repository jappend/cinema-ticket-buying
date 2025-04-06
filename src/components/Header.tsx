import { Link } from "react-router"

function Header() {
  return (
    <header className="bg-indigo-950 w-full h-[50px] pl-[30px] flex items-center mb-[15px] gap-[10px] text-white">
      <h1 className="text-xl font-bold">
        <Link to={{ pathname: "/" }}> 
          Cinema Name
        </Link>
      </h1>
      <p> | </p>
      <Link className="hover:text-stone-300" to={{ pathname: "/movies" }}>
        Movies
      </Link>
    </header>
  )
}

export default Header
