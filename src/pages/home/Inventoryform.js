import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import * as XLSX from "xlsx";

export default function Inventoryform({ uid, displayName }) {
  const [name, setName] = useState("");
  const [boxno, setBoxno] = useState("");
  const [slot, setSlot] = useState("");
  const [invt, setInvt] = useState("");
  const [item, setItem] = useState([])
  const [map, setmap] = useState(new Map());


  const { user, invtype, dispatch } = useAuthContext();
  const obj1 = useFirestore("samples");
  const addDocument1 = obj1.addDocument;
  const response1 = obj1.response;

  const obj2 = useFirestore("Freezer");
  const addDocument2 = obj2.addDocument;
  const response2 = obj2.response;

  const obj3 = useFirestore("Deep Freezer");
  const addDocument3 = obj3.addDocument;
  const response3 = obj3.response;

  const obj4 = useFirestore("Liquid Nitrogen");
  const addDocument4 = obj4.addDocument;
  const response4 = obj4.response;

  //const { addDocument, response } = useFirestore("samples");
  //const { addDocument2, response2 } = useFirestore("Freezer");
  //const { addDocument3, response3 } = useFirestore("Deep Freezer");
  //const { addDocument4, response4 } = useFirestore("Liquid Nitrogen");

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file)
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws)
        resolve(data)
      };
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
    promise.then((d) => {
      console.log(d);
      setItem(d);
      console.log(item)

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (map.get(boxno) != 1) {
    //   addDocument({
    //     uid,
    //     name,
    //     boxno,
    //     slot,
    //   });
    // } else {
    // }
    if (invt === 'Refrigerator') {

      addDocument1({
        uid,
        name,
        boxno,
        slot,
      });
    }
    else if (invt === 'Freezer') {

      addDocument2({
        uid,
        name,
        boxno,
        slot,
      });
    }
    else if (invt === 'Deep Freezer') {

      addDocument3({
        uid,
        name,
        boxno,
        slot,
      });
    }
    else if (invt === 'Liquid Nitrogen') {

      addDocument4({
        uid,
        name,
        boxno,
        slot,
      });
    }
  };

  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    console.log(event.target.value);
    setBoxno(event.target.value);
  };

  const handleChange3 = (event) => {
    console.log(event.target.value);
    setSlot(event.target.value);
  };

  const handleInvtype = (event) => {
    //console.log(event.target.value);
    setInvt(event.target.value);
    dispatch({ type: 'invtype', payload: event.target.value })
    console.log(event.target.value)

  };

  const handleUpload = () => {

    item.map((it) => {
      let name = it.Sample
      let slot = it.Slot
      let boxno = it.Box

      if (invt === 'Refrigerator') {

        addDocument1({
          uid,
          name,
          boxno,
          slot,
        });
      }
      else if (invt === 'Freezer') {

        addDocument2({
          uid,
          name,
          boxno,
          slot,
        });
      }
      else if (invt === 'Deep Freezer') {

        addDocument3({
          uid,
          name,
          boxno,
          slot,
        });
      }
      else if (invt === 'Liquid Nitrogen') {

        addDocument4({
          uid,
          name,
          boxno,
          slot,
        });
      }
    })


  }

  useEffect(() => {
    if (response1.success || response2.success || response3.success || response4.success) {
      setName("");
      setBoxno("");
      setSlot("");
      setInvt("");
    }
  }, [response1.success, response2.success, response3.success, response4.success]);

  return (
    <>
      <h3>Add Samples</h3>



      <form onSubmit={handleSubmit}>
        <label>
          <span>Inventory Type:</span>
          <select value={invt} onChange={handleInvtype}>
            <option value="">--Choose Inventory--</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Freezer">Freezer</option>
            <option value="Deep Freezer">Deep Freezer</option>
            <option value="Liquid Nitrogen">Liquid Nitrogen</option>

          </select>
        </label>
        <label>
          <span>Sample name:</span>
          <input
            type="text"
            required
            onChange={handleName}
            value={name}
          />
        </label>

        <label>
          <span>Box No:</span>
          <input
            type="text"
            required
            onChange={handleChange2}
            value={boxno}
          />
        </label>
        <label>
          <span>Slot No:</span>
          <input
            onChange={handleChange3}
            type="number"
            required
            min="0"
            max="100"
            value={slot}
          />
        </label>
        {<button>Add</button>}
        <br />
        <label >
          <span>File upload:</span>
          <input type="file" onChange={(e) => {
            const file = e.target.files[0];

            readExcel(file)
          }} />
        </label>
        {<button onClick={() => {
          handleUpload();
        }}>Upload</button>}
      </form>
    </>
  );
}
