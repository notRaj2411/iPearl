import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import * as XLSX from "xlsx";

export default function SopForm({ uid, displayName }) {
    const [name, setName] = useState("");

    const [map, setmap] = useState(new Map())
    const [url, setUrl] = useState('');
    const [item, setItem] = useState([])


    const { addDocument, response } = useFirestore("sop");
    const { user } = useAuthContext();

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

    const handleUpload = () => {

        item.map((it) => {
            let name = it.SOP
            let url = it.Link;
            addDocument({
                name, url
            })
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            name,
            url
        });



        console.log(item);
    };



    useEffect(() => {
        if (response.success) {
            setName("");
            setUrl("")

        }
    }, [response.success]);

    return (
        <>
            <h3>Add SOP</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Project Name:</span>
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


                {<button>Add SOP</button>}
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
