import { Link } from "react-router"

function Header() {
  return (
    <header className="bg-gray-800 text-white py-6 px-8 text-center shadow-md mb-[10px]">
      <h1 className="text-3xl font-bold mb-4">
        <Link className="text-white" to={{ pathname: "/" }}> 
          Cinema Name
        </Link>
      </h1>
      <Link className="text-lg mx-4 hover:text-blue-400" to={{ pathname: "/movies" }}>
        Movies
      </Link>
      <Link className="text-lg mx-4 hover:text-blue-400" to={{ pathname: "/tickets" }}>
        Tickets 
      </Link>
    </header>
  )
}

export default Header
