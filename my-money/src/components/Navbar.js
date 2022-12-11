import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'


// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { dispatch } = useAuthContext()
  const { booked } = useAuthContext()
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    dispatch({ type: 'INV', payload: true })
  }
  const handleBookSlotBtn = () => {
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'inst', payload: "" })
    dispatch({ type: 'time', payload: "" })
    dispatch({ type: 'booked', payload: false })
    dispatch({ type: 'bookslot', payload: true })
    setFlag(true);
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>iPearl</li>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}

        {user && user.displayName != 'admin' && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={() => handleBookSlotBtn()}> Book Slot</button>
            </li>
            <li></li>
            <li>
              <button className="btn" onClick={() => handleClick()}> Sample Inventory</button>
            </li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>

          </>
        )}
        {user && user.displayName == 'admin' && (
          <>
            <li>hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}