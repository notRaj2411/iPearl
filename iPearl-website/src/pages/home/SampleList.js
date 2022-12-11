import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function SampleList({ sample }) {

    return (
        <>
            <h2 style={{ color: "green" }}>Sample Inventory</h2>
            <br />
            <div className='title'>
                <h4 >Box</h4>
                <h4 >Sample</h4>
            </div>

            <ul className={styles.transactions}>
                {sample.map((transaction) => (
                    <li key={transaction.id}>
                        <p className={styles.name}> {transaction.amount}</p>
                        <p className={styles.amount}>{transaction.name}</p>

                        <br />


                    </li>
                ))}
            </ul>
            {console.log(sample)}


        </>

    )
}