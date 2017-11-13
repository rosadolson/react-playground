import React from 'react'
import PropTypes from 'prop-types'

const ToDoList = ({toDo}) => {
  return (
    <div>
      {
        toDo.map(item => {
          return (
            <div>
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
  toDo: PropTypes.array.isRequired
}

export default ToDoList
