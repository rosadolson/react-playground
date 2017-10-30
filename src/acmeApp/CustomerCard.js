import React from 'react'
import PropTypes from 'prop-types'

const CustomerCard = ({img, name, email}) => {
  return (
    <div className='customer-card'>
      <img src={img} />
      <h4>{name}</h4>
      <p>{email}</p>
      <button type='button' className='email-button'> SEND AN EMAIL </button>
    </div>
  )
}

CustomerCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default CustomerCard
