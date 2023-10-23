import { useState } from "react"

const App = () => {

 const [todos, setTodo] = useState ([])
 const [task, setTask] = useState ("")

 const handleChangeTask = (event) => {
  
    setTask(event.target.value)
 }

 const handleClickSave = () => {
  setTodo([...todos, {text: task}])
    
 }

return <>
  <section className="grid place-items-center h-screen ">
  <article className="flex gap-5">
    <input type="text" placeholder="Titulo de la tarea" className="border border-gray-200 p-1" onChange={handleChangeTask} value={task}/>

  <button className="bg-yellow-400 p-1 rounded text-white" onClick={handleClickSave}>Guardar</button>
  </article>
  
  <article>
    <ul>
      {todos.map((list, index) =>{
        return <li key={index}>{list.text}</li>
      })}
    </ul>
    

   
  </article>

  </section>


  </>
}
export default App
