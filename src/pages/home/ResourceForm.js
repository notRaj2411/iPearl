import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function ResourceForm({ uid, displayName }) {
    const [name, setName] = useState("");

    const [map, setmap] = useState(new Map());
    const [url, setUrl] = useState('');

    const { addDocument, response } = useFirestore("resource");
    const { user } = useAuthContext();



    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            name,
            url
        });


        console.log(url);
    };



    useEffect(() => {
        if (response.success) {
            setName("");
            setUrl("")
        }
    }, [response.success]);

    return (
        <>
            <h3>Add Resource</h3>
            <form onSubmit={handleSubmit}>
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
