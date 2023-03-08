import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function TransactionForm({ uid, displayName }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { dispatch } = useAuthContext();
  const { addDocument, response } = useFirestore("transactions");
  const { DATE, booked, inst, time } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDocument({
      uid,
      name,
      amount,
      displayName,
      date,
    });

    dispatch({ type: "inst", payload: "" });
    dispatch({ type: "time", payload: "" });
    dispatch({ type: "booked", payload: false });
    dispatch({ type: "DATE", payload: "" });
  };

  const handleChange = (event) => {
    setName(event.target.value);
    dispatch({ type: "inst", payload: event.target.value });
  };

  const handleChange2 = (event) => {
    setAmount(event.target.value);
    dispatch({ type: "time", payload: event.target.value });
  };

  const handleChange3 = (event) => {
    setDate(event.target.value);
    dispatch({ type: "DATE", payload: event.target.value });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      setDate("");
    }
  }, [response.success]);

  useEffect(() => {
    setName(inst);
    setAmount(time);
    setDate(DATE);
  }, [inst, time, DATE]);

  return (
    <>
      <h3>Book a slot</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Equipment name:</span>
          <select value={name} required onChange={handleChange}>
            <option value="">--Choose the equipment--</option>
            <option value="Cell Culture L1: Biosafety Cabinet, Host">Cell Culture L1: Biosafety Cabinet, Host</option>
            <option value="Cell Culture L2: Biosafety Cabinet, Parasite">Cell Culture L2: Biosafety Cabinet, Parasite</option>
            <option value="Cell Culture R1: Biosafety Cabinet Host and Parasite">Cell Culture R1: Biosafety Cabinet Host and Parasite</option>
            <option value="Bacterial Culture: Biosafety Cabinet">Bacterial Culture: Biosafety Cabinet</option>
            <option value="Zeiss Microscope">Zeiss Microscope</option>
            <option value="Spectramax iD5">Spectramax iD5</option>
            <option value="Veriti PCR">Veriti PCR</option>
            <option value="Proflex PCR Block1">Proflex PCR Block1</option>
            <option value="Proflex PCR Block2">Proflex PCR Block2</option>
            <option value="Proflex PCR Block3">Proflex PCR Block3</option>
            <option value="SDS PAGE Equipment">SDS PAGE Equipment</option>
            <option value="Bacterial Centrifuge">Bacterial Centrifuge</option>
            <option value="Common Computer-Scholar's Room">Common Computer-Scholar's Room</option>

            <option value="IXCM Confocal">IXCM Confocal</option>

          </select>
        </label>

        <label>
          <span>Date:</span>
          {/* min={new Date().toISOString().split('T')[0]} */}
          <input type="date" required onChange={handleChange3} value={date} />
        </label>

        <label>
          <span>Time:</span>
          <select value={amount} required onChange={handleChange2}>
            <option value="">--Choose the slot--</option>
            <option value="8:00-9:00 am">8:00-9:00 am</option>
            <option value="9:00-10:00 am">9:00-10:00 am</option>
            <option value="10:00-11:00 am">10:00-11:00 am</option>
            <option value="11:00-12:00 am">11:00-12:00 am</option>
            <option value="12:00-1:00 pm">12:00-1:00 pm</option>
            <option value="1:00-2:00 pm">1:00-2:00 pm</option>
            <option value="2:00-3:00 pm">2:00-3:00 pm</option>
            <option value="3:00-4:00 pm">3:00-4:00 pm</option>
            <option value="4:00-5:00 pm">4:00-5:00 pm</option>
          </select>
        </label>

        {!booked && <button>Book</button>}
      </form>
    </>
  );
}
