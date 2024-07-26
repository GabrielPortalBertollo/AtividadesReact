import { useState } from "react";
import image from "../assets/Logo.png"
let linhas=[
    ["texto 1","texto 2","texto 3","texto 4"],
    ["texto 5","texto 6","texto 7","texto 8"],
    ["texto 9","texto 10","texto 11","texto 12"],
    ["texto 13","texto 14","texto 15","texto 16"]
]





function Index() {
    const [lis, setLis]= useState("");






    return(
        <div>
            <header>
                <img src={image} alt="" />
                <div id="headerContent">
                    <h1>React.js</h1>
                    <p>i.e., using the React library for rendering the UI</p>
                </div>
            </header>

            <div id="conteudo">
            <button value="0" onClick={(e) => setLis(linhas[e.target.value])}>Why React?</button>
            <button value="1" onClick={(e) => setLis(linhas[e.target.value])}>Core Features</button>
            <button value="2" onClick={(e) => setLis(linhas[e.target.value])}>Related Resources</button>
            <button value="3" onClick={(e) => setLis(linhas[e.target.value])}>React VS JS</button>
            <div>
                <ul id="list">
                    <li>{lis[0]}</li>
                    <li>{lis[1]}</li>
                    <li>{lis[2]}</li>
                    <li>{lis[3]}</li>
                </ul>
            </div>
            </div>
        </div>
    )
}





export default Index;

