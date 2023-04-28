import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
export default function Faq({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''
    const { deleteDocument } = useFirestore('sop')
    const { user, res, sopsearch } = useAuthContext()
    //const sopsearch = "hello"

    return (
        <>
            <h2 style={{ color: "green" }}>FAQ</h2>
            <br />
            <div className="title">
                <h4>Questions</h4>
                <h4 style={{ marginRight: '210px' }}>Answers</h4>

            </div>
            <ul className={styles.transactions}>
                <li>
                    <span className={styles.spacing} >{1 + '.'}</span>
                    <p className={styles.name}> {"What does R mean?"}</p>
                    <p className={styles.amount}> {"R means refrigerator"}</p>

                </li>
                <li>
                    <span className={styles.spacing} >{2 + '.'}</span>
                    <p className={styles.name}> {"What does F mean?"}</p>
                    <p className={styles.amount}> {"F means freezer"}</p>

                </li>
            </ul>


            {/* <ul className={styles.transactions}>
                {sample && sample.filter((transaction) => {
                    if (sopsearch === "") {
                        return transaction
                    }
                    else if (transaction.name.toLowerCase().includes(sopsearch.toLowerCase())) {
                        return transaction;
                    }
                }).map((transaction, idx) => (

                    <li key={transaction.id}>
                        <span className={styles.spacing} >{idx + 1 + '.'}</span>

                        <p className={styles.name}> {transaction.name}</p>

                        <a className={styles.amount} href={transaction.url}>{transaction.name}</a>
                        {user.displayName == 'admin' && (<button onClick={() => deleteDocument(transaction.id)}>x</button>)}
                        <br />
                    </li>
                ))}
            </ul>
            {console.log(sample)}
            <p>faq</p> */}
        </>
    );
}
