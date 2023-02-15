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
import ManageUsers from "./ManageUsers";
export default function Home() {
  const { user, inv, inst, time, DATE, search, sop, res, invtype, restype, manusers } = useAuthContext();

  const obj3 = useCollection("sop");
  const sopdoc = obj3.documents;

  const Chemicals = useCollection("Chemicals");
  const Antibodies = useCollection("Antibodies");
  const Inhibitors = useCollection("Inhibitors");
  const Plasmids = useCollection("PlasmidsMaps");
  const Others = useCollection("Others");




  let resdoc;
  if (restype === 'Chemicals') { resdoc = Chemicals.documents; }
  else if (restype === 'Antibodies') {
    resdoc = Antibodies.documents;
  }
  else if (restype === 'Inhibitors') {
    resdoc = Inhibitors.documents;
  }
  else if (restype === 'PlasmidsMaps') {
    resdoc = Plasmids.documents;
  }
  else if (restype === 'Others') {
    resdoc = Others.documents;
  }



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
    ["boxno", ">=", "1"],
    ["boxno", "asc"]
  );
  const objf = useCollection(
    "Freezer",
    ["boxno", ">=", "1"],
    ["boxno", "asc"]
  );
  const objdf = useCollection(
    "Deep Freezer",
    ["boxno", ">=", "1"],
    ["boxno", "asc"]
  );
  const objln = useCollection(
    "Liquid Nitrogen",
    ["boxno", ">=", "1"],
    ["boxno", "asc"]
  );
  let sample = '', error2 = '';
  if (invtype === 'Refrigerator') {
    sample = obj2.documents;
    error2 = obj2.error;
  }
  else if (invtype === 'Freezer') {
    sample = objf.documents;
    error2 = objf.error;
  }
  else if (invtype === 'Deep Freezer') {
    sample = objdf.documents;
    error2 = objdf.error;
  }
  else if (invtype === 'Liquid Nitrogen') {
    sample = objln.documents;
    error2 = objln.error;
  }



  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* populates the user transacation list */}
        {error && <p>{error}</p>}
        {!res && !sop && !inst && !inv && user.displayName != "admin" && documents && (
          <TransactionList sample={documents} />
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


        {!res && !sop && !search && user.displayName === "admin" && sample && !manusers && (
          <SampleList sample={sample} />
        )}
        {!res && !sop && search && inv && user.displayName === "admin" && sample && !manusers && (
          <SampleListFiltered sample={sample} search={search} />
        )}
        {!res && sop && user.displayName === "admin" && sopdoc && !manusers && (
          <SopList sample={sopdoc} />
        )}
        {res && !sop && user.displayName === "admin" && sopdoc && !manusers && (
          <ResourceList sample={resdoc} />
        )}

        {!res && !sop && user.displayName === "admin" && manusers && (
          <ManageUsers sample={sopdoc} />
        )}

      </div>

      <div className={styles.sidebar}>
        {/* populates sidebar */}
        {/* populates Transaction form for normal user */}
        {!res && !sop && !inv && user.displayName != "admin" && (
          <TransactionForm uid={user.uid} displayName={user.displayName} />
        )}
        {/* populates INventory form for admin */}
        {!res && !sop && user.displayName === "admin" && !manusers && (
          <Inventoryform uid={user.uid} displayName={user.displayName} />
        )}
        {!res && sop && user.displayName === "admin" && !manusers && (
          <SopForm uid={user.uid} displayName={user.displayName} />
        )}
        {res && !sop && user.displayName === "admin" && !manusers && (
          <ResourceForm uid={user.uid} displayName={user.displayName} />
        )}

      </div>
    </div>
  );
}
