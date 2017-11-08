import React from 'react'
import PropTypes from 'prop-types'

const MenuItems = ({ name, price, category, spiceLevel, img }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{spiceLevel}</p>
      <img src={img} />
    </div>
  )
}

MenuItems.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired
}

export default MenuItems
