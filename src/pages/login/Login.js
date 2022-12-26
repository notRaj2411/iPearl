import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import logo from '../../components/logo.png';

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
      <img src={logo} width="300" height="180" style={{ 'margin-left': '600px', 'margin-top': '10px' }} />

      <h1 style={{ color: '#1f9751', 'margin-left': '550px' }}>Lab Management 😁</h1>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <h2>Login </h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
        {!isPending && <button className="btn">Login</button>}
        {isPending && <button className="btn" disabled>loading</button>}
        {error && <p>{error}</p>}
      </form>
    </>

  )
}