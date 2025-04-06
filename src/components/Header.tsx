import { Link } from "react-router"

function Header() {
  return (
    <header className="bg-indigo-950 w-full h-[50px] pl-[30px] flex items-center mb-[15px]">
      <h1 className="text-2xl font-bold text-white">
        <Link to={{ pathname: "/" }}> 
          Cinema Name
        </Link>
      </h1>
    </header>
  )
}

export default Header
