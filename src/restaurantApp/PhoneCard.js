import React from 'react'
import PropTypes from 'prop-types'

const PhoneCard = ({ phone }) => {
  return (
    <div className='phone-card'>
      <h4>Phone:</h4>
      <p>{phone}</p>
    </div>
  )
}

PhoneCard.propTypes = {
  phone: PropTypes.string.isRequired
}

export default PhoneCard
