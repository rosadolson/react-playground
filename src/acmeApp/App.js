import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from './Jumbotron'
import NavBar from './NavBar'
import ContactSection from './ContactSection'
import AddressCard from './AddressCard'
import PhoneCard from './PhoneCard'
import CustomerSection from './CustomerSection'
import './index.css'

const App = ({data}) => {
  return (
    <div>
      <Jumbotron
        title={data.company[0].title}
      />
      <NavBar />
      <CustomerSection arr={data.customers} />
      <ContactSection
        title={'CONTACT US'}
        content={'Need to get in touch with us? Here are a couple ways to do that!'}
      >
        <div className='contact-card-container'>
          <AddressCard
            street={data.company[0].street}
            city={data.company[0].city}
            state={data.company[0].state}
            zip={data.company[0].zip}
          />
          <PhoneCard
            phone={data.company[0].phoneNumber}
          />
        </div>
      </ContactSection>
    </div>
  )
}

App.propTypes = {
  data: PropTypes.object.isRequired
}

export default App
