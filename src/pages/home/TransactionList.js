import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function TransactionList({ transactions }) {
  return (
    <>
      <h2 style={{ color: "green" }}>Booked Slots</h2>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <div className="middle">
              <p className={styles.amount}>{transaction.date}</p>
              <p className={styles.amount}> {transaction.amount}</p>
            </div>
            <p className="bookedBy">booked by: {transaction.displayName}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
