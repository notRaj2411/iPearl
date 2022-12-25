import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ResourceList({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''
    return (
        <>
            <h2 style={{ color: "green" }}>Resources</h2>
            <br />
            <div className="title">
                <h4>Resource Name</h4>
                <h4>Link</h4>

            </div>

            <ul className={styles.transactions}>
                {sample.map((transaction) => (

                    <li key={transaction.id}>


                        {/* {ans = (hyperlink.link({ transaction.url }))} */}
                        <p className={styles.name}> {transaction.name}</p>
                        {/* <p className={styles.amount}>{ans.link(transaction.url)}</p> */}
                        <a className={styles.amount} href={transaction.url}>{transaction.name}</a>
                        <br />
                    </li>
                ))}
            </ul>
            {console.log(sample)}
        </>
    );
}
