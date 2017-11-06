import React from 'react'
import PropTypes from 'prop-types'

const AddressCard = ({ street, suite, city, state, zip }) => {
  return (
    <div className='address-card'>
      <h4>Address:</h4>
      <p>
        {street}
        {suite}
        {city}
        {state}
        {zip}</p>
    </div>
  )
}

AddressCard.propTypes = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
}

export default AddressCard
