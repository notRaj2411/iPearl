import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ResourceList({ sample }) {
    let ans = 'hehe'
    let hyperlink = ''
    const obj1 = useFirestore('Chemicals')
    const obj2 = useFirestore('Antibodies')
    const obj3 = useFirestore('Inhibitors')
    const obj4 = useFirestore('PlasmidsMaps')
    const obj5 = useFirestore('Others')
    const { user, res, restype, ressearch } = useAuthContext()
    let deleteDocument;
    if (restype === 'Chemicals') {
        deleteDocument = obj1.deleteDocument;
    }
    else if (restype === 'Antibodies') {
        deleteDocument = obj2.deleteDocument;
    }
    else if (restype === 'Inhibitors') {
        deleteDocument = obj3.deleteDocument;
    }
    else if (restype === 'PlasmidsMaps') {
        deleteDocument = obj4.deleteDocument;
    }
    else if (restype === 'Others') {
        deleteDocument = obj5.deleteDocument;
    }



    return (
        <>
            <h2 style={{ color: "green" }}>Resources</h2>
            <br />
            <div className="title">

                {restype === 'PlasmidsMaps' &&
                    <h4>Plasmid Maps</h4>
                }

                {restype != 'PlasmidsMaps' &&
                    <h4>{restype}</h4>
                }



                <h4 style={{ marginRight: '210px' }}>Link</h4>

            </div>

            <ul className={styles.transactions}>
                {sample.filter((transaction) => {
                    if (ressearch === "") {
                        return transaction
                    }
                    else if (transaction.name.toLowerCase().includes(ressearch.toLowerCase())) {
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
