import React from 'react'
import PropTypes from 'prop-types'
import MenuCard from './MenuCard'

const MenuSection = ({ arr }) => {
  return (
    <div>
      <div className='menu-section'>
        {
          arr.map((item, index) => {
            return <MenuCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
              category={item.category}
              spiceLevel={item.spiceLevel}
            />
          })
        }
      </div>
    </div>
  )
}

MenuSection.propTypes = {
  arr: PropTypes.any
}
export default MenuSection
