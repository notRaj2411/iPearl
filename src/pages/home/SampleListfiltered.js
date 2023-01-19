import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function SampleListfiltered({ sample, search }) {
    return (
        <>
            <h2 style={{ color: "green" }}>Sample Inventory</h2>
            <br />
            <div className="title">
                <h4>Box</h4>
                <h4>Slot</h4>
                <h4>Sample</h4>
            </div>
            {/* {console.log(search)} */}
            <ul className={styles.transactions}>
                {sample.map((transaction) => transaction.name === search ? (
                    <li key={transaction.id}>
                        <p className={styles.name}> {transaction.boxno}</p>
                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        <p className={styles.name}> {transaction.slot}</p>
                        <p className={styles.amount}>{transaction.name}</p>
                        <br />
                    </li>
                ) : null)}
            </ul>
            {console.log(sample)}
        </>
    );
}
