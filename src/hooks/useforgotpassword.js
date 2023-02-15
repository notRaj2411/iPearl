import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useforgotpassword = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [lk, setlk] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const forgotpassword = async (email) => {
        setError(null)
        setIsPending(true)
        setlk(false)

        try {

            const res = await projectAuth.sendPasswordResetEmail(email)

            // dispatch login action
            //dispatch({ type: 'LOGIN', payload: res.user })


            if (!isCancelled) {
                setIsPending(false)
                setError(null)
                setlk(true)
            }
        }
        catch (err) {
            if (!isCancelled) {
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { forgotpassword, isPending, error, lk }
}