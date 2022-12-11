import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function TransactionList({ transactions }) {

  return (
    <>
      <h2 style={{ color: "green" }}>Booked Slots</h2>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}> {transaction.amount}</p>
            <br />
            <p > booked by: {transaction.displayName}</p>

          </li>
        ))}
      </ul>
    </>

  )
}