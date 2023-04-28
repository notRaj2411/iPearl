import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import logo from '../../components/logo.png';
import { Link } from "react-router-dom"

// styles
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (

    <>

      <div style={{ background: 'repeating-linear-gradient(135deg, beige, transparent 1400px)' }} >
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'></link>
        <img src={logo} width="300" height="180" style={{ 'margin-left': '650px', 'margin-top': '10px' }} />

        <h1 style={{ color: '#1f9751', 'margin-left': '550px' }}>iPEARL Management System (IMS)</h1>
        <div className='styles.sidebar'>
          <form onSubmit={handleSubmit} className={styles['login-form']}>
            <h2>Login </h2>
            <label>
              <span>Email:</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{}}
              />
            </label>
            <label>
              <span>Password:</span>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>

            <div>
              {!isPending && <button className="btn" style={{ transition: 'all 0.5s ease-in-out' }}>Login</button>}
              {isPending && <button className="btn" disabled>loading</button>}
              {error && <p>{error}</p>}
            </div>


            <br />
            <p >
              <Link style={{ color: 'green', fontSize: '15px' }} to="/forgotpassword">forgot password?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}