import React from 'react'
import './styles.css'
import data from './data'
import MenuSection from './MenuSection'
import ContactSection from './ContactSection'
import NavBar from './NavBar'

const TexMexApp = () => {
  return (
    <div>
      <NavBar navTitle={data.company[0].title} />
      <h1>{data.company[0].title}</h1>
      <MenuSection arr={data.items} />
      <ContactSection
        arr={data.address}
        phone={data.phone} />
    </div>
  )
}

export default TexMexApp
