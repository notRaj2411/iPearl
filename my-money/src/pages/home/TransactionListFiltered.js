import React from 'react'
import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react'

export default function TransactionListFiltered({ temp, clock }) {
    // const { inst } = useAuthContext()
    const { booked } = useAuthContext()
    const { dispatch } = useAuthContext()
    const obj3 = useCollection('transactions')
    // const [booked, setBooked] = useState(false);
    const transactions = obj3.documents
    // console.log(obj3.documents)
    const handleClick = () => {
        dispatch({ type: 'booked', payload: true })
    }
    return (
        <>

            {transactions?.map((transaction) => {
                if (transaction.name === temp && transaction.amount === clock && !booked) {
                    console.log('already booked')
                    handleClick()
                }
            })}


            {!booked && <h2 style={{ color: "green" }}>Filtered</h2>}
            {booked && <h2 style={{ color: "green" }}>Slot is full</h2>}
            {!booked && <ul className={styles.transactions}>
                {transactions?.map((transaction) => (
                    transaction.name === temp ? <li key={transaction.id}>
                        <p className={styles.name}>{transaction.name}</p>
                        <p className={styles.amount}> {transaction.amount}</p>
                        <br />
                        <p > booked by:{transaction.displayName}</p>
                        {/* if(booked===true){setBooked(false)} */}

                    </li> : null
                ))}
            </ul>}
        </>

    )
}