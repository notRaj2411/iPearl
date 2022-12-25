import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import logo from './logo.png';


// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user, res } = useAuthContext()
  const { dispatch, sop } = useAuthContext()
  const { booked } = useAuthContext()
  const { inv } = useAuthContext()
  const { search } = useAuthContext()
  const [flag, setFlag] = useState(false);
  const [searched, setSearched] = useState('')
  const handleClick = () => {
    dispatch({ type: 'INV', payload: true })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'res', payload: false })
    setSearched('')
  }
  const handleSearch = () => {
    dispatch({ type: 'search', payload: searched })
    //setSearched
    console.log(searched)
  }
  const handleSop = () => {
    dispatch({ type: 'sop', payload: true })
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'res', payload: false })
    //setSearched

  }
  const handleInventory = () => {
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'res', payload: false })


  }
  const handleBookSlotBtn = () => {
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'inst', payload: "" })
    dispatch({ type: 'time', payload: "" })
    dispatch({ type: 'booked', payload: false })
    dispatch({ type: 'bookslot', payload: true })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'res', payload: false })
    setFlag(true);
  }

  const handleSearchValue = event => {
    setSearched(event.target.value);
    console.log(searched)

  };

  const handleResource = () => {
    dispatch({ type: 'res', payload: true })
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'search', payload: false })

    //setSearched
    console.log(res)
  }

  useEffect(() => {
    setSearched('')

  }, [])

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <img src={logo} width="100" height="60" style={{ 'margin-right': '40px' }} />
        </li>

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
              <button className="btn" onClick={() => handleClick()}>Inventory</button>
            </li>
            <li>
              <button className="btn" onClick={() => handleSop()}>SOP</button>
            </li>


            {!sop && inv && (<>  <li>

              <input type="text" value={searched} id="simple-search" class="btn1" placeholder="Search       " required onChange={handleSearchValue} />

            </li>

              <li>
                <button className="search" onClick={() => handleSearch()}>🔍</button>
              </li></>
            )
            }



            <li>
              <button className="btn" onClick={() => handleResource()}>Resource</button>
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
              <button className="btn" onClick={() => handleInventory()}>Inventory</button>
            </li>
            <li>
              <button className="btn" onClick={() => handleSop()}>SOP</button>
            </li>
            <li>
              <button className="btn" onClick={() => handleResource()}>Resource</button>
            </li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}