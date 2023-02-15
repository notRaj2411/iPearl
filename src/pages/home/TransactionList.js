import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";


export default function TransactionList({ transactions }) {
  const { user } = useAuthContext();
  const obj1 = useFirestore('transactions')
  const deleteDocument = obj1.deleteDocument;
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
            {user.displayName == transaction.displayName && (<button onClick={() => deleteDocument(transaction.id)}>x</button>)}
          </li>
        ))}
      </ul>
    </>
  );
}
