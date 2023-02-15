import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
export default function ManageUsers({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''
    const { deleteDocument } = useFirestore('sop')
    const { user, res, sopsearch } = useAuthContext()
    //const sopsearch = "hello"

    return (
        <>
            <h2 style={{ color: "green" }}>Pending registrations</h2>
            <br />
            <div className="title">
                <h4>User Name</h4>
                <h4>email id</h4>

            </div>

            <ul className={styles.transactions}>
                {sample.map((transaction, idx) => (
                    <>
                        <li key={transaction.id}>
                            <span className={styles.spacing} >{idx + 1 + '.'}</span>
                            {/* {ans = (hyperlink.link({ transaction.url }))} */}
                            <p className={styles.name}> {transaction.name}</p>
                            {/* <p className={styles.amount}>{ans.link(transaction.url)}</p> */}
                            <a className={styles.amount} href={transaction.url}>{transaction.name}</a>
                            <br />
                        </li>
                        <button className={styles.approveBtn}>Approve</button>
                        <button className={styles.approveBtn}>Decline</button>
                    </>

                ))}
            </ul>
            {console.log(sample)}
        </>
    );
}
