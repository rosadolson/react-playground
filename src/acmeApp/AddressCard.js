import React from 'react'
import PropTypes from 'prop-types'

const AddressCard = ({street, city, state, zip}) => {
  return (
    <div className='address-card'>
      <div>
        <h3>ADDRESS:</h3>
      </div>
      <p> {street} </p>
      <p> {city}, {state} {zip} </p>
    </div>
  )
}

AddressCard.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
}

export default AddressCard
