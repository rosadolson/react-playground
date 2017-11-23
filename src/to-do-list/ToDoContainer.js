import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

class ToDoContainer extends Component {
  state = {
    toDos: undefined,
    title: undefined,
    dueDate: undefined
  }

  componentDidMount () {
    const toDoArray = [{title: 'Finish Homework', dueDate: '11/14/17'},
      {title: 'Do Stuff', dueDate: '11/15/17'},
      {title: 'Thanksgiving Dinner', dueDate: '11/23/17'}]
    this.setState({ toDos: toDoArray })
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
    const newToDoList = this.state.toDos
    newToDoList.push(newToDo)
    this.setState({ toDos: newToDoList })
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
          this.state.toDos
            ? <ToDoList toDos={this.state.toDos} />
            : <h3>No ToDo's yet</h3>
        }
      </div>
    )
  }
}

export default ToDoContainer
