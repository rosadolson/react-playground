import React from 'react'
import PropTypes from 'prop-types'

const PhoneCard = ({phone}) => {
  return (
    <div className='phone-card'>
      <div>
        <h3>PHONE:</h3>
      </div>
      <p> {phone} </p>
    </div>
  )
}

PhoneCard.propTypes = {
  phone: PropTypes.string.isRequired
}

export default PhoneCard
