import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: '3%',
    background: 'white',
    borderRadius: '5px',
    border: '1px solid #e22d54',
    color: '#e22d54',
    padding: '4%'
  }
}

const ToDoForm = ({ addNewToDo, handleTitleChange, handleDueDateChange }) => {
  return (
    <div style={formStyle.container}>
      <div>
        <label> Add A New To Do: </label>
        <input onChange={handleTitleChange} placeholder='Enter To Do Here' />
      </div>
      <div>
        <label> Add A Due Date: </label>
        <input onChange={handleDueDateChange} placeholder='Enter Due Date Here' />
      </div>
      <div>
        <button type='button' onClick={addNewToDo}>Add To Do</button>
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
