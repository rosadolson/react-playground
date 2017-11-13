import React from 'react'
import PropTypes from 'prop-types'

const ToDoForm = ({ addNewToDo, handleTitleChange, handleDueDateChange }) => {
  return (
    <div>
      <div>
        <label> Add a New ToDo </label>
        <input onChange={handleTitleChange} placeholder='Enter Task Here' />
      </div>
      <div>
        <label> Add a Due Date </label>
        <input onChange={handleDueDateChange} placeholder='Enter Due Date Here' />
      </div>
      <div>
        <button type='button' onClick={addNewToDo}>Add ToDo</button>
      </div>
    </div>
  )
}

ToDoForm.propTypes = {
  handleTitleChange: PropTypes.func.isRequired,
  handleDueDateChange: PropTypes.func.isRequired,
  addNewToDo: PropTypes.func.isRequired
}

export default ToDoForm
