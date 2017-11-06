import React from 'react'
import './styles.css'
import data from './data'
import MenuSection from './MenuSection'

const TexMexApp = () => {
  return (
    <div>
      <MenuSection arr={data.items} />
    </div>
  )
}

export default TexMexApp
