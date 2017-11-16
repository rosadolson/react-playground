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
    toDos: [],
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }

  componentDidMount () {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    this.setState({ toDos: toDos })
    console.log(toDos, 'localStorage toDos')
    setTimeout(() => {
      this.sortByCompleted()
    }, 3000)
  }

  addToDo = (e) => {
    e.preventDefault()
    const allToDo = this.state.toDos
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos.length + 1
      }
      allToDo.push(newToDo)
      this.setState({ toDos: allToDo })
      this.sortByCompleted()
      localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
      alert('Your item has been added!')
      this.setState({ title: '', dueDate: '' })
    } else {
      alert('Please complete both Title and Due Date.')
    }
  }

  sortByCompleted = () => {
    const completed = this.state.toDos.filter(item => item.complete)
    const incomplete = this.state.toDos.filter(item => !item.complete)
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
        <div>
          {
            this.state.toDos
              ? (
                <div style={listStyles.container}>
                  <ToDoList toDos={this.state.incomplete}
                    markComplete={this.markComplete}
                    title='Incomplete To Dos'
                  />
                  <ToDoList toDos={this.state.completed}
                    markComplete={this.markComplete}
                    title='Completed To Dos'
                  />
                </div>
              )
              : 'Loading...'
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
