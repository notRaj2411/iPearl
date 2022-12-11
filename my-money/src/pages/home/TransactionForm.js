import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'


export default function TransactionForm({ uid, displayName }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { dispatch } = useAuthContext()
  const { addDocument, response } = useFirestore('transactions')
  const { bookslot } = useAuthContext()
  const { user, inv, booked, inst, time } = useAuthContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    addDocument({
      uid,
      name,
      amount,
      displayName
    })

    dispatch({ type: 'inst', payload: "" })
    dispatch({ type: 'time', payload: "" })
    dispatch({ type: 'booked', payload: false })
    dispatch({ type: 'bookslot', payload: true })
  }

  const handleChange = event => {
    setName(event.target.value);
    dispatch({ type: 'inst', payload: event.target.value })
  };

  const handleChange2 = event => {
    setAmount(event.target.value);
    dispatch({ type: 'time', payload: event.target.value })
  };

  useEffect(() => {
    if (response.success) {
      setName("")
      setAmount("")
    }
  }, [response.success])
  useEffect(() => {
    setName(inst)
    setAmount(time)
  }, [inst, time])

  return (
    <>
      <h3>Book a slot</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Equipment name:</span>
          <select value={name} required onChange={handleChange}>
            <option value="">--Choose the equipment--</option>
            <option value="Microscope">Microscope</option>
            <option value="Autoclave Machine">Autoclave Machine</option>
            <option value="Magnetic stirrers">Magnetic stirrers</option>
            <option value="Incubator">Incubator</option>
          </select>
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
  )
}