import { useState } from "react";

function Task() {
    const [task, setTask]= useState("");

    return(
        <div>
            <h1>Lista de tarefas</h1>
            <input type="text" id="input" onChange={() => setTask(document.getElementById("input").value)} placeholder="Digite sua tarefa aqui."/>
            <button onClick={() => createLine(task)}>Confirmar tarefa</button>
            <ul id="list">

            </ul>
        </div>
    )
}

function createLine(task) {
    console.log(task)
    let list= document.getElementById("list");
    let li=document.createElement("li");
    li.textContent=task;
    list.append(li);
    document.getElementById("input").value=""
}


export default Task;

