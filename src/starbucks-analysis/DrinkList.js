import React from 'react'
import PropTypes from 'prop-types'
import DrinkCard from './DrinkItem'

const DrinkList = ({ data }) =>
  <div>
    {
      data.map((item, index) => {
        return (
          <DrinkCard key={index} item={item} />
        )
      })
    }
  </div>

DrinkList.propTypes = {
  data: PropTypes.array.isRequired
}

export default DrinkList
