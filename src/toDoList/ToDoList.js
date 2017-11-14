import React from 'react'
import PropTypes from 'prop-types'

const toDoListStyle = {
  container: {
    marginTop: '6%',
    marginBottom: '20%'
  }
}

const toDoStyle = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '3%',
    background: 'white',
    borderRadius: '5px',
    color: '#e22d54',
    padding: '3%',
    border: '1px dashed #e22d54'
  }
}

const ToDoList = ({ toDos }) => {
  return (
    <div style={toDoListStyle.container}>
      {
        toDos.map(item => {
          return (
            <div style={toDoStyle.container}>
              <p><input type='checkbox' /></p>
              <p>To Do: {item.title}</p>
              <p>Due Date: {item.dueDate}</p>
            </div>
          )
        })
      }
    </div>
  )
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
}

export default ToDoList
