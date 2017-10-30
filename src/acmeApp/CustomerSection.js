import React from 'react'
import PropTypes from 'prop-types'
import CustomerCard from './CustomerCard'

const CustomerSection = ({arr, customer}) => {
  return (
    <div>
      <div>
        <h2 className='customer-header'>MEET SOME OF OUR BEST CUSTOMERS:</h2>
      </div>
      <div className='customer-section'>
        {
          arr.map((customer) => {
            return <CustomerCard
              img={customer.img}
              name={customer.name}
              email={customer.email}
            />
          })
        }
      </div>
    </div>
  )
}

CustomerSection.propTypes = {
  arr: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired
}

export default CustomerSection
