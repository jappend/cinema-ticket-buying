import { Link } from "react-router"

function NotFound() {
  return (
    <div className="pl-[30px]">
      <h1 className="text-xl font-bold">404</h1>
      <p>Oops! Looks like this page doesn't exist.</p>
      <p>Click <span className="text-blue-500"><Link to={{ pathname: "/" }}>here</Link></span> to return to the main page.</p>
    </div>
  )
}

export default NotFound 
