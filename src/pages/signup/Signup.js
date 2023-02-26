import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import logo from '../../components/logo.png';
import { useFirestore } from '../../hooks/useFirestore';


// styles
import styles from './Signup.module.css'

export default function Signup() {
  const { addDocument, response } = useFirestore("manageusers");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setmsg] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password, displayName)
    //signup(email, password, displayName)
    addDocument({
      displayName,
      email,

    });
    setmsg(true);
  }

  return (
    <>
      <img src={logo} width="300" height="180" style={{ 'margin-left': '600px' }} />
      <h1 style={{ color: '#1f9751', 'margin-left': '550px' }}>Lab Management System</h1>
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>Sign Up</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label> */}
        <label>
          <span>Username:</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        {!isPending && <button className="btn">Sign Up</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <p>{error}</p>}
        {msg && <p>Registration request is sent to admin</p>}
      </form>
    </>

  )
}