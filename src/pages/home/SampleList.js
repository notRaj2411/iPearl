import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";



export default function SampleList({ sample }) {
  // const { deleteDocument } = useFirestore('samples')
  const { user, res, invtype } = useAuthContext()

  const obj1 = useFirestore('samples');
  const obj2 = useFirestore('Freezer');
  const obj3 = useFirestore('Deep Freezer');
  const obj4 = useFirestore('Liquid Nitrogen');

  let deleteDocument;
  if (invtype === 'Refrigerator') {
    deleteDocument = obj1.deleteDocument
  }
  else if (invtype === 'Freezer') {
    deleteDocument = obj2.deleteDocument;
  }
  else if (invtype === 'Deep Freezer') {
    deleteDocument = obj3.deleteDocument;
  }
  else if (invtype === 'Liquid Nitrogen') {
    deleteDocument = obj4.deleteDocument;
  }


  return (

    <>
      <h2 style={{ color: "green" }}>{invtype}</h2>
      <br />
      <div className="title">
        <h4>Box</h4>
        <h4>Slot</h4>
        <h4>Sample</h4>
      </div>

      <ul className={styles.transactions}>
        {sample.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}> {transaction.boxno}</p>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <p className={styles.name}> {transaction.slot}</p>
            <p className={styles.amount}>{transaction.name}</p>
            {user.displayName == 'admin' && (<button onClick={() => deleteDocument(transaction.id)}>x</button>)}

            <br />
          </li>
        ))}
      </ul>
      {console.log(sample)}
    </>
  );
}
