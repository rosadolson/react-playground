import React from 'react'
import PropTypes from 'prop-types'
import SpiceIcon from './SpiceIcon'

const MenuCard = ({ img, name, price, category, spiceLevel }) => {
  return (
    <div className='menu-card'>
      <img src={img} />
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>Spice Level: {spiceLevel}</p>
      <span><SpiceIcon spice={spiceLevel} /></span>
    </div>
  )
}

MenuCard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.any,
  price: PropTypes.any,
  category: PropTypes.any,
  spiceLevel: PropTypes.any
}

export default MenuCard
