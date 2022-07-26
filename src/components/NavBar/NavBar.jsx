import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
    <header>
      {user ?
        <nav>
          <div>Welcome, {user.name}</div>
          <div><Link className='link' to="/">Notes</Link></div>
          <div><Link className='link' to="/add">Create Note</Link></div>
          <div><Link className='link' to="" onClick={handleLogout}>LOG OUT</Link></div>
          <div><Link className='link' to="/changePassword">Change Password</Link></div>
        </nav>
      :
        <nav>
          <div><Link className='link' to="/login">Log In</Link></div>
          <div><Link className='link' to="/signup">Sign Up</Link></div>
        </nav>
      }
    </header>
    </>
  )
}

export default NavBar
