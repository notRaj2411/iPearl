import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";


export default function TransactionList({ transactions }) {
  const { user } = useAuthContext();
  const obj1 = useFirestore('transactions')
  const deleteDocument = obj1.deleteDocument;

  const handleUpdate = () => {
    let date = new Date().toLocaleString() + ""

    if (date[1] == '/') {
      date = '0' + date;
    }
    let year = date.substring(6, 10)
    //console.log(year)
    let month = date.substring(0, 2)
    //console.log(month)
    date = year + month;
    //date = date.substring(0, 2);
    console.log(date)


    {
      transactions && transactions.map((transaction) => {
        let curyear = transaction.date.substring(0, 4);
        let curmonth = transaction.date.substring(5, 7);
        let curdate = curyear + curmonth;
        console.log(curdate)
        if (curdate < date) {
          console.log(transaction.date)
          deleteDocument(transaction.id)
        }
      })

    }



  }
  return (
    <>
      <h2 style={{ color: "green" }}>Booked Slots</h2>
      <ul className={styles.transactions}>
        {console.log(transactions)}
        {transactions && transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <div className="middle">
              <p className={styles.amount}>{transaction.date}</p>
              <p className={styles.amount}> {transaction.amount}</p>

            </div>
            <div className="middle">
              <p className="bookedBy">booked by: {transaction.displayName}</p>
              <p className={styles.name}> {transaction.comment}</p>
            </div>

            {((user.displayName == transaction.displayName) || (user.displayName == "admin")) && (<button onClick={() => deleteDocument(transaction.id)}>x</button>)}

          </li>
        ))}

      </ul>
      {user.displayName == "admin" && <button className="btn" onClick={() => {
        handleUpdate();
      }} >Update</button>}
    </>
  );
}
