import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ResourceForm({ uid, displayName }) {
    const [name, setName] = useState("");
    const [rest, setRest] = useState("");

    const [map, setmap] = useState(new Map());
    const [url, setUrl] = useState('');

    const obj1 = useFirestore("Chemicals");
    const addDocument1 = obj1.addDocument;
    const response1 = obj1.response;

    const obj2 = useFirestore("Antibodies");
    const addDocument2 = obj2.addDocument;
    const response2 = obj2.response;

    const obj3 = useFirestore("Inhibitors");
    const addDocument3 = obj3.addDocument;
    const response3 = obj3.response;

    const obj4 = useFirestore("PlasmidsMaps");
    const addDocument4 = obj4.addDocument;
    const response4 = obj4.response;

    const obj5 = useFirestore("Others");
    const addDocument5 = obj5.addDocument;
    const response5 = obj5.response;


    const { user, dispatch, restype } = useAuthContext();

    const handleRest = (event) => {
        setRest(event.target.value);
        dispatch({ type: 'restype', payload: event.target.value })
        console.log(event.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rest === 'Chemicals') {
            addDocument1({
                name,
                url
            });
        }
        else if (rest === 'Antibodies') {
            addDocument2({
                name,
                url
            });
        }
        else if (rest === 'Inhibitors') {
            addDocument3({
                name,
                url
            });
        }
        else if (rest === 'PlasmidsMaps') {
            addDocument4({
                name,
                url
            });
        }
        else if (rest === 'Others') {
            addDocument5({
                name,
                url
            });
        }




        console.log(rest);
    };



    useEffect(() => {
        if (response1.success || response2.success || response3.success || response4.success || response5.success) {
            setName("");
            setUrl("")
            setRest("")
        }
    }, [response1.success, response2.success, response3.success, response4.success, response5.success]);

    return (
        <>
            <h3>Add Resource</h3>
            <form onSubmit={handleSubmit}>

                <label>
                    <span>Resource Type:</span>
                    <select value={rest} onChange={handleRest}>
                        <option value="">--Choose Resource--</option>
                        <option value="Chemicals">Chemicals</option>
                        <option value="Antibodies">Antibodies</option>
                        <option value="Inhibitors">Inhibitors</option>
                        <option value="PlasmidsMaps">  Plasmids Maps</option>
                        <option value="Others">Others</option>

                    </select>
                </label>

                <label>
                    <span>Resource Name:</span>
                    <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span>Link: </span>
                    <input type="url"
                        required
                        onChange={(e) => setUrl(e.target.value)}
                        name='Link'
                        value={url}

                    />
                </label>

                {<button>Add Resource</button>}
            </form>
        </>
    );
}
