import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import logo from './logo.png';


// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user, res, invtype, restype } = useAuthContext()
  const { dispatch, sop } = useAuthContext()
  const { booked } = useAuthContext()
  const { inv } = useAuthContext()
  const { search } = useAuthContext()
  const [flag, setFlag] = useState(false);
  const [inventory, setInventory] = useState('');
  const [resource, setResource] = useState('');


  const [searched, setSearched] = useState('')
  const handleClick = (e) => {
    setInventory(e.target.value)
    dispatch({ type: 'INV', payload: true })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'res', payload: false })
    dispatch({ type: 'invtype', payload: e.target.value })
    console.log(e.target.value);

    setSearched('')
  }
  const handleSearch = () => {
    dispatch({ type: 'search', payload: searched })

    console.log(searched)
  }
  const handleSop = () => {
    dispatch({ type: 'sop', payload: true })
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'res', payload: false })


  }
  const handleInventory = () => {
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'res', payload: false })
    dispatch({ type: 'inv', payload: true })


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

  const handleResource = (e) => {
    setResource(e.target.value);
    dispatch({ type: 'res', payload: true })
    dispatch({ type: 'sop', payload: false })
    dispatch({ type: 'INV', payload: false })
    dispatch({ type: 'search', payload: false })
    dispatch({ type: 'restype', payload: e.target.value })

    console.log(restype)
    //console.log(res)
  }

  useEffect(() => {
    setSearched('')
    setInventory('')

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
            {/* <li>
              <button className="btn" onClick={() => handleClick()}>Inventory</button>
            </li> */}
            <li>
              <select className="btn1" value={inventory} required onChange={handleClick}>
                <option value="">--Inventory--</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Freezer">Freezer</option>
                <option value="Deep Freezer">Deep Freezer</option>
                <option value="Liquid Nitrogen">Liquid Nitrogen</option>


              </select>
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
            {/* <li>
              <button className="btn" onClick={() => handleClick()}>Inventory</button>

            </li> */}
            <li>
              <select className="btn1" value={inventory} required onChange={handleClick}>
                <option value="">--Inventory--</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Freezer">Freezer</option>
                <option value="Deep Freezer">Deep Freezer</option>
                <option value="Liquid Nitrogen">Liquid Nitrogen</option>


              </select>
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
            {/* <li>
              <button className="btn" onClick={() => handleResource()}>Resource</button>
            </li> */}
            <li>
              <select className="btn1" value={resource} required onChange={handleResource}>
                <option value="">--Resources--</option>
                <option value="Chemicals">Chemicals</option>
                <option value="Antibodies">Antibodies</option>
                <option value="Inhibitors">Inhibitors</option>
                <option value="PlasmidsMaps">Plasmids Maps</option>
                <option value="Others">Others</option>


              </select>
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