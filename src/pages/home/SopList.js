import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
export default function SopList({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''
    const { deleteDocument } = useFirestore('sop')
    const { user, res, sopsearch } = useAuthContext()
    //const sopsearch = "hello"

    return (
        <>
            <h2 style={{ color: "green" }}>SOP</h2>
            <br />
            <div className="title">
                <h4>Procedure Name</h4>
                <h4>Link</h4>

            </div>

            <ul className={styles.transactions}>
                {sample.filter((transaction) => {
                    if (sopsearch === "") {
                        return transaction
                    }
                    else if (transaction.name.toLowerCase().includes(sopsearch.toLowerCase())) {
                        return transaction;
                    }
                }).map((transaction, idx) => (

                    <li key={transaction.id}>
                        <span className={styles.spacing} >{idx + 1 + '.'}</span>
                        {/* {ans = (hyperlink.link({ transaction.url }))} */}
                        <p className={styles.name}> {transaction.name}</p>
                        {/* <p className={styles.amount}>{ans.link(transaction.url)}</p> */}
                        <a className={styles.amount} href={transaction.url}>{transaction.name}</a>
                        {user.displayName == 'admin' && (<button onClick={() => deleteDocument(transaction.id)}>x</button>)}
                        <br />
                    </li>
                ))}
            </ul>
            {console.log(sample)}
        </>
    );
}
