import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  // whatever i return must be a single component (e.g.div)

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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
  // can only return one component
    <div className="container">
      {/* <Header title={1}/> */} 
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'All tasks completed'}
      
    </div>
  );
}
 


export default App;
