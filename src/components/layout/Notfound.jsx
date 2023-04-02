import React from 'react'
import{MdError} from "react-icons/md"
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
  <section className='notFound'>
  <main>
    <div>
      <MdError />
      <h1>404</h1>
    </div>
    <p>Page not Found , click below to go to Home Page</p>
    <Link to="/">Go to Home</Link>
  </main>
  </section>
  )
}

export default Notfound