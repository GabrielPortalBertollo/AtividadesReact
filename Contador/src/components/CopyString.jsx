import { useState } from "react";


function CopyString() {
    const [string, setString]= useState("");

    return(
        <div>
            <h1>Espelho de texto</h1>
            <input type="text" id="input" onChange={() => setString(document.getElementById("input").value)} placeholder="Digite algo aqui."/>
            <h2>{string}</h2>
        </div>
    )
}
export default CopyString;

