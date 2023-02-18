import {NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <span className='logo'> Mern ✍️</span>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/add">AddPost</NavLink></li>
            
        </ul>
    </div>
  )
}

export default Navbar