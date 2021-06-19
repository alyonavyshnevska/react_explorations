import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {


// show/hide the add task fields

  const [showAddTask, setShowAddTask ] = useState(false)

  // state should be at the top level
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Kayak Date',
      day: '1 Sept 2021',
      reminder: true

    }
  ]
  )

  // Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


  // Delete task: or just do not show it in the ui
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    { ...task, reminder : !task.reminder } : task))
  }

  // whatever i return must be a single component (e.g.div)
  return (
  // can only return one component
    <div className="container">
      {/* When Add button is ckicked then ShowTasks is toggeled */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* Show task fields or not. Short wat to do a ternary operation */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {/* if there are tasks show them, if not say that they are cnomleted */}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      ) : 
      'All tasks completed'}
      
    </div>
  );
}
 


export default App;
