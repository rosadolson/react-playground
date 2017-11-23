import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  container: {
    color: 'white',
    background: '#D2D7D3',
    marginTop: '3%',
    borderRadius: '5px',
    width: '86vw'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3% 8%'
  },
  input: {
    padding: '3%',
    borderRadius: '5px'
  }
}

const ToDoForm = ({ addToDo, title, dueDate, updateDueDate, updateTitle }) => {
  return (
    <div style={formStyle.container}>
      <form>
        <div style={formStyle.field}>
          <label>Title:</label>
          <input style={formStyle.input} type='text' value={title} onChange={updateTitle} />
        </div>
        <div style={formStyle.field}>
          <label>Due Date:</label>
          <input style={formStyle.input} type='date' value={dueDate} onChange={updateDueDate} />
        </div>
        <div style={formStyle.field}>
          <button onClick={addToDo}>Submit</button>
        </div>
      </form>
    </div>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateDueDate: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default ToDoForm
