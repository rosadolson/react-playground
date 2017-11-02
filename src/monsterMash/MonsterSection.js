import React from 'react'
import PropTypes from 'prop-types'
import MonsterCard from './MonsterCard'

const MonsterSection = ({arr}) => {
  return (
    <div className='monster-section'>
      {
        arr.filter((monster) => {
          return monster.name[0] === 'M'
        }).map((monster) => {
          return <MonsterCard monster={monster} />
        })
      }
    </div>
  )
}

MonsterSection.propTypes = {
  arr: PropTypes.array.isRequired
}

export default MonsterSection