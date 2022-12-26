import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// styles
import styles from "./Home.module.css";
import Inventoryform from "./Inventoryform";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import SampleList from "./SampleList";
import TransactionListFiltered from "./TransactionListFiltered";
import SampleListFiltered from "./SampleListfiltered"
import SopList from "./SopList";
import SopForm from "./SopForm";
import ResourceForm from "./ResourceForm";
import ResourceList from "./ResourceList";
export default function Home() {
  const { user, inv, inst, time, DATE, search, sop, res } = useAuthContext();

  const obj3 = useCollection("sop");
  const sopdoc = obj3.documents;

  const obj4 = useCollection("resource");
  const resdoc = obj4.documents;

  const obj1 = useCollection(
    "transactions",
    ["date", "!=", ""],
    ["date", "desc"],
    ["amount"]
  );
  const documents = obj1.documents;
  const error = obj1.error;

  const obj2 = useCollection(
    "samples",
    ["amount", ">=", "1"],
    ["amount", "asc"]
  );
  const sample = obj2.documents;
  const error2 = obj2.error;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* populates the user transacation list */}
        {error && <p>{error}</p>}
        {!res && !sop && !inst && !inv && user.displayName != "admin" && documents && (
          <TransactionList transactions={documents} />
        )}
        {!res && !sop && inst && !inv && user.displayName != "admin" && documents && (
          <TransactionListFiltered temp={inst} clock={time} date={DATE} />
        )}
        {!res && !sop && !search && inv && user.displayName != "admin" && sample && (
          <SampleList sample={sample} />
        )}
        {!res && !sop && search && inv && user.displayName != "admin" && sample && (
          <SampleListFiltered sample={sample} search={search} />
        )}
        {!res && sop && user.displayName != "admin" && sopdoc && (
          <SopList sample={sopdoc} />
        )}
        {res && !sop && user.displayName != "admin" && sopdoc && (
          <ResourceList sample={resdoc} />
        )}

        {/* populates the admin sample list */}
        {error2 && <p>{error2}</p>}
        {!res && !sop && !search && user.displayName === "admin" && sample && (
          <SampleList sample={sample} />
        )}
        {!res && !sop && search && inv && user.displayName == "admin" && sample && (
          <SampleListFiltered sample={sample} search={search} />
        )}
        {!res && sop && user.displayName === "admin" && sopdoc && (
          <SopList sample={sopdoc} />
        )}
        {res && !sop && user.displayName === "admin" && sopdoc && (
          <ResourceList sample={resdoc} />
        )}
      </div>

      <div className={styles.sidebar}>
        {/* populates sidebar */}
        {/* populates Transaction form for normal user */}
        {!res && !sop && !inv && user.displayName != "admin" && (
          <TransactionForm uid={user.uid} displayName={user.displayName} />
        )}
        {/* populates INventory form for admin */}
        {!res && !sop && user.displayName === "admin" && (
          <Inventoryform uid={user.uid} displayName={user.displayName} />
        )}
        {!res && sop && user.displayName === "admin" && (
          <SopForm uid={user.uid} displayName={user.displayName} />
        )}
        {res && !sop && user.displayName === "admin" && (
          <ResourceForm uid={user.uid} displayName={user.displayName} />
        )}
      </div>
    </div>
  );
}
