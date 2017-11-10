import React from 'react'
import PropTypes from 'prop-types'

const GiftForm = ({ handleNameOfGiftChange, handleNameOfPriceChange, addNewGift }) => {
  return (
    <div>
      <div>
        <label> Gift Name: </label>
        <input onChange={handleNameOfGiftChange} placeholder='Enter Name of Gift' />
      </div>
      <div>
        <label> Gift Price: </label>
        <input onChange={handleNameOfPriceChange} placeholder='Enter Price' />
      </div>
      <div>
        <button type='button' onClick={addNewGift}>Add Gift</button>
      </div>
    </div>
  )
}

GiftForm.propTypes = {
  handleNameOfGiftChange: PropTypes.func.isRequired,
  handleNameOfPriceChange: PropTypes.func.isRequired,
  addNewGift: PropTypes.func.isRequired
}

export default GiftForm
