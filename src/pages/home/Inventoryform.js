import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Inventoryform({ uid, displayName }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [slot, setSlot] = useState("");
  const [map, setmap] = useState(new Map());

  const { addDocument, response } = useFirestore("samples");
  const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (map.get(amount) != 1) {
      addDocument({
        uid,
        name,
        amount,
        slot,
      });
    } else {
    }
  };

  const handleChange2 = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };

  const handleChange3 = (event) => {
    console.log(event.target.value);
    setSlot(event.target.value);
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
      setSlot("");
    }
  }, [response.success]);

  return (
    <>
      <h3>Add Samples</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Sample name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Box No:</span>
          <select value={amount} onChange={handleChange2}>
            <option value="">--Choose box number--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
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
      </form>
    </>
  );
}
