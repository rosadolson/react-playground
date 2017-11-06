import React from 'react'
import PropTypes from 'prop-types'

const Link = ({name}) => {
  return (
    <div className='link'>
      <a href='#'> {name} </a>
    </div>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired
}

export default Link
