import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";
export default function ManageUsers({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''

    const { user, res, sopsearch } = useAuthContext()
    const { signup, isPending, error } = useSignup()
    const [email, setEmail] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [password, setPassword] = useState('12345678')
    const obj1 = useFirestore('manageusers')
    const deleteDocument = obj1.deleteDocument;
    //const sopsearch = "hello"
    const handleApprove = (displayName, email, id) => {
        console.log(displayName)
        signup(email, password, displayName)
        deleteDocument(id)
    }
    return (
        <>
            <h2 style={{ color: "green" }}>Pending registrations</h2>
            <br />
            <div className="title">
                <h4>User Name</h4>
                <h4 className="title1" >email id</h4>

            </div>

            <ul className={styles.transactions}>
                {sample && sample.map((transaction, idx) => (
                    <>
                        <li key={transaction.id}>
                            <span className={styles.spacing} >{idx + 1 + '.'}</span>

                            <p className={styles.name}> {transaction.displayName}</p>

                            <p className={styles.amount}> {transaction.email}</p>

                            <br />
                            <button className={styles.approveBtn} onClick={() => { handleApprove(transaction.displayName, transaction.email, transaction.id) }}>Approve</button>
                            <button className={styles.approveBtn} onClick={() => deleteDocument(transaction.id)}>Decline</button>
                        </li>

                    </>

                ))}
            </ul>
            {console.log(sample)}
        </>
    );
}
