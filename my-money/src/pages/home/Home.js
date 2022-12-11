import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'


// styles
import styles from './Home.module.css'
import Inventoryform from './Inventoryform'

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import SampleList from './SampleList'
import TransactionListFiltered from './TransactionListFiltered'

export default function Home() {
  const { user, inv, inst, time } = useAuthContext()


  const obj1 = useCollection('transactions')
  const documents = obj1.documents
  const error = obj1.error


  const obj2 = useCollection('samples', ["amount", ">=", "1"], ["amount", "asc"])
  const sample = obj2.documents
  const error2 = obj2.error

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* populates the user transacation list */}
        {error && <p>{error}</p>}
        {!inst && !inv && user.displayName != 'admin' && documents && <TransactionList transactions={documents} />}
        {inst && !inv && user.displayName != 'admin' && documents && <TransactionListFiltered temp={inst} clock={time} />}
        {inv && user.displayName != 'admin' && sample && <SampleList sample={sample} />}

        {/* populates the admin sample list */}
        {error2 && <p>{error2}</p>}
        {user.displayName === 'admin' && sample && <SampleList sample={sample} />}
      </div>

      <div className={styles.sidebar}>
        {/* populates sidebar */}
        {/* populates Transaction form for normal user */}
        {!inv && user.displayName != 'admin' && <TransactionForm uid={user.uid} displayName={user.displayName} />}
        {/* populates INventory form for admin */}
        {user.displayName === 'admin' && < Inventoryform uid={user.uid} displayName={user.displayName} />}
      </div>
    </div>
  )
}