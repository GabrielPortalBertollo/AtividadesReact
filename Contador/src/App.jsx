import Counter from "./components/Counter"
import CopyString from "./components/CopyString"
import Task from "./components/Task"

function App() {
  return (
    <>
    <Counter />
    <Task />
    {/*<CopyString />    aparentemente o react não funciona corretamente com o copy e o Task*/}
    </>
  )
}

export default App