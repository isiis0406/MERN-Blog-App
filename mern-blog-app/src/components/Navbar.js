import {NavLink, Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='logo'>
          <Link to={'/'}>
          Mern ✍️
          </Link>
        </span>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">AddPost</NavLink></li>
            
        </ul>
    </div>
  )
}

export default Navbar