import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class ToDoContainer extends Component {
  state = {
    toDo: undefined,
    title: undefined,
    dueDate: undefined
  }

  componentDidMount () {
    const toDoArray = [{title: 'Bake Cookies', dueDate: '11/10/17'}, {title: 'Do Stuff', dueDate: '12/01/17'}]
    this.setState({ toDo: toDoArray })
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleDueDateChange = (e) => {
    this.setState({ dueDate: e.target.value })
  }

  addNewToDo = (e) => {
    e.preventDefault()
    const newToDo = { title: this.state.title, dueDate: this.state.dueDate }
    const newToDoList = this.state.toDo
    newToDoList.push(newToDo)
  }

  render () {
    return (
      <div>
        <ToDoForm
          handleTitleChange={this.handleTitleChange}
          handleDueDateChange={this.handleDueDateChange}
          addNewToDo={this.addNewToDo}
        />
        {
          this.state.toDo
            ? <ToDoList toDo={this.state.toDo} />
            : <h3>No ToDo's yet</h3>
        }
      </div>
    )
  }
}

export default ToDoContainer
