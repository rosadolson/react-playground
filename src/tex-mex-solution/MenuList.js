import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

const MenuList = ({ foodItems }) => {
  return (
    <div>
      {
        foodItems.map((food, index) => {
          return (
            <div key={index}>
              <MenuItem
                name={food.name}
                price={food.price}
                category={food.category}
                spiceLevel={food.spiceLevel}
                img={food.img}
              />
            </div>
          )
        })
      }
    </div>
  )
}

MenuList.propTypes = {
  foodItems: PropTypes.array.isRequired
}

export default MenuList
