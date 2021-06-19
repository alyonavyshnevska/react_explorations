import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {


  // show/hide the add task fields

  const [showAddTask, setShowAddTask] = useState(false)

  // state should be at the top level
  const [tasks, setTasks] = useState([])

  // useEffect is often used to load some data as the page loads
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
    // [] is a dependency array: if some values need to be changed when it runs
  }, [])

  // fetch tasks from dummy server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }



  // Add task
  const addTask = async (task) => {

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks,data])
    // // don't need the id anymore, it gets assigned by the backend
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }


  // Delete task: or just do not show it in the ui
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

//  or just do not show it in the ui
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  // whatever i return must be a single component (e.g.div)
  return (
    <Router>
      {/* // can only return one component */}
      <div className="container">
        {/* When Add button is ckicked then ShowTasks is toggeled */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

        {/* Go to about page, do not show tasks */}
        <Route path='/' exact render={(props) => (
          <>
            {/* Show task fields or not. Short wat to do a ternary operation */}
            {showAddTask && <AddTask onAdd={addTask} />}
            {/* if there are tasks show them, if not say that they are cnomleted */}
            {tasks.length > 0 ? (
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) :
              'All tasks completed'}
          </>
        )

        } />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}



export default App;
