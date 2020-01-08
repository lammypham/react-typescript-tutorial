import React from 'react'
import logo from './logo.svg'
import Header from './components/Header'
import Description from './components/Description'
import './App.css'
import { Task } from './models/task'
import NewTaskForm from './components/NewTaskForm'
import { TasksList } from './components/TaskList'
interface IState {
  newTask: Task
  tasks: Task[]
}

class App extends React.Component<{}, IState> {
  state = {
    newTask: {
      id: 1,
      name: '',
    },
    tasks: [],
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: '',
      },
      tasks: [...previousState.tasks, previousState.newTask],
    }))
  }

  private deleteTasks = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id),
      ],
    }))
  }

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value,
      },
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Header name='React' />
        </header>
        <Description countBy={1} />
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TasksList tasks={this.state.tasks} onDelete={this.deleteTasks} />
      </div>
    )
  }
}

export default App
