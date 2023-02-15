import { useState } from 'react'
import { useforgotpassword } from '../../hooks/useforgotpassword'
import logo from '../../components/logo.png';


// styles
import styles from '../login/Login.module.css'

export default function ForgotPassword() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { forgotpassword, error, isPending, lk } = useforgotpassword()

    const handleSubmit = (e) => {
        e.preventDefault()
        forgotpassword(email)
    }

    return (
        <>
            <img src={logo} width="300" height="180" style={{ 'margin-left': '600px', 'margin-top': '10px' }} />

            <h1 style={{ color: '#1f9751', 'margin-left': '550px' }}>Lab Management System</h1>
            <form onSubmit={handleSubmit} className={styles['login-form']}>
                <h2>Password Reset </h2>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>

                {!isPending && !lk && <button className="btn">Reset</button>}
                {isPending && <button className="btn" disabled>loading</button>}
                {lk && <p>Password reset link sent successfully</p>}

                {error && <p>{error}</p>}

            </form>
        </>

    )
}