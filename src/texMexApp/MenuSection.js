import React from 'react'
import PropTypes from 'prop-types'
import MenuCard from './MenuCard'
import MenuSearch from './MenuSearch'

const MenuSection = ({ arr }) => {
  return (
    <div>
      <div className='menu-section'>
        <MenuSearch />
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
  arr: PropTypes.array.isRequired
}

export default MenuSection
