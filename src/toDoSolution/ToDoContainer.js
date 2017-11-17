import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

const listStyles = {
  container: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    toDos: undefined,
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }

  componentDidMount () {
    const toDos = JSON.parse(localStorage.getItem('toDos')) || []
    this.setState({ toDos: toDos })
    console.log(toDos, 'localStorage toDos')
    setTimeout(() => {
      this.sortByCompleted()
    }, 3000)
  }

  addToDo = (e) => {
    e.preventDefault()
    const allToDo = this.state.toDos || []
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos
          ? this.state.toDos.length + 1
          : 1
      }
      allToDo.push(newToDo)
      this.setState({ toDos: allToDo })
      localStorage.setItem('toDos', JSON.stringify(allToDo))
      alert('Your item has been added!')
      this.setState({ title: '', dueDate: '' })
      this.sortByCompleted()
    } else {
      alert('Please complete both Title and Due Date.')
    }
  }

  sortByCompleted = () => {
    console.log(this.state.toDos)
    const completed = this.state.toDos
      ? this.state.toDos.filter(item => item.complete)
      : []
    const incomplete = this.state.toDos
      ? this.state.toDos.filter(item => !item.complete)
      : []
    this.setState({ completed: completed, incomplete: incomplete })
  }

  updateTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  updateDueDate = (e) => {
    this.setState({ dueDate: e.target.value })
  }

  markComplete = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theToDo)
    theToDo.complete = !theToDo.complete
    this.sortByCompleted()
  }

  resetToDos = () => {
    this.setState({ toDos: [], completed: [], incomplete: [] })
    localStorage.clear()
  }

  deleteToDo = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    const newArray = this.state.toDos.filter(item => {
      return item.id !== theToDo.id
    })
    this.setState({ toDos: newArray })
    localStorage.setItem('toDos', JSON.stringify(newArray))
    setTimeout(() => {
      this.sortByCompleted()
    }, 3000)
  }

  render () {
    return (
      <div>
        <ToDoForm
          addToDo={this.addToDo}
          title={this.state.title}
          dueDate={this.state.dueDate}
          updateTitle={this.updateTitle}
          updateDueDate={this.updateDueDate}
        />
        <button onClick={this.resetToDos} type='button'>Reset To Do List</button>
        <div>
          {
            this.state.toDos
              ? (
                <div style={listStyles.container}>
                  <ToDoList toDos={this.state.incomplete}
                    markComplete={this.markComplete}
                    deleteToDo={this.deleteToDo}
                    title='Incomplete To Dos'
                  />
                  <ToDoList toDos={this.state.completed}
                    markComplete={this.markComplete}
                    deleteToDo={this.deleteToDo}
                    title='Completed To Dos'
                  />
                </div>
              )
              : 'No To Dos'
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
