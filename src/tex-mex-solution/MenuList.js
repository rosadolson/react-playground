import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const MenuList = ({ foodItems }) => {
  return (
    <ul>
      {
        foodItems.map((food, index) => {
          return (
            <li key={index}>
              <MenuItem
                name={food.name}
                price={food.price}
                category={food.category}
                spiceLevel={food.spiceLevel}
                img={food.img}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

MenuList.propTypes = {
  foodItems: PropTypes.array.isRequired
}

export default MenuList
