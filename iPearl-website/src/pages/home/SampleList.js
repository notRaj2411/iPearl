import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function SampleList({ sample }) {
  const { deleteDocument } = useFirestore('samples')
  return (

    <>
      <h2 style={{ color: "green" }}>Sample Inventory</h2>
      <br />
      <div className="title">
        <h4>Box</h4>
        <h4>Slot</h4>
        <h4>Sample</h4>
      </div>

      <ul className={styles.transactions}>
        {sample.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}> {transaction.amount}</p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <p className={styles.name}> {transaction.slot}</p>
            <p className={styles.amount}>{transaction.name}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
            <br />
          </li>
        ))}
      </ul>
      {console.log(sample)}
    </>
  );
}
