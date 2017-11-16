import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    padding: '3%',
    width: '50%'
  }
}

const ClassInfo = ({ item }) => {
  return (
    <div style={styles.container}>
      <h3>{item.name}</h3>
      <p>Cost: ${item.cost}</p>
      <p>Length: {item.length}</p>
      <p>{item.instructor}</p>
      <p>{item.location}</p>
    </div>
  )
}

ClassInfo.propTypes = {
  item: PropTypes.object.isRequired
}

export default ClassInfo
