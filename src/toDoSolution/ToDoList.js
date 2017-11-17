import React from 'react'
import ToDo from './ToDo'
import PropTypes from 'prop-types'

const styles = {
  container: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3% 1%',
    padding: '3%',
    border: '3px dashed #D2D7D3',
    color: '#91B496'
  }
}

const ToDoList = ({ toDos, title, markComplete, deleteToDo }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {
        toDos.length > 0
          ? toDos.map(toDo => {
            return <ToDo
              title={toDo.title}
              dueDate={toDo.dueDate}
              complete={toDo.complete}
              id={toDo.id}
              markComplete={markComplete}
              deleteToDo={deleteToDo}
            />
          })
          : 'Your to do list is empty.'
      }
    </div>
  )
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired
}

export default ToDoList
