import React from 'react'
import PropTypes from 'prop-types'
import AddressCard from './AddressCard'
import PhoneCard from './PhoneCard'

const ContactSection = ({arr, phone}) => {
  return (
    <div>
      <h1>Contact Us:</h1>
      <AddressCard
        street={arr.street}
        suite={arr.suite}
        city={arr.city}
        state={arr.state}
        zip={arr.zip}
      />
      <PhoneCard phone={phone} />
    </div>
  )
}

ContactSection.propTypes = {
  arr: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired
}

export default ContactSection
