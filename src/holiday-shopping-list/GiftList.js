import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({gifts}) => {
  return (
    <div>
      {
        gifts.map(item => {
          return (
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          )
        })
      }
    </div>
  )
}

GiftList.propTypes = {
  gifts: PropTypes.array.isRequired
}

export default GiftList
