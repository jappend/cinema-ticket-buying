import { useState } from "react"

function Tickets() {
  const [ name, setName ] = useState<string>('')


  return (
    <div>
      <h1 className="text-xl font-bold">Purchase a Ticket!</h1>
      <p>
        You will use this page to purchase a ticket, just type in your name, select your
        prefered movie, your favorite seat and you're ready to go!
      </p>

      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input 
        id="name"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Ex: John Doe"
        type="text"
        value={name} 
        onChange={e => setName(e.target.value)}
      />
    </div>
  )
}

export default Tickets 
