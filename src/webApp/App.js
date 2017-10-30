import React from 'react'
import faker from 'faker'
import './index.css'
import Jumbotron from './Jumbotron'
import NavigationBar from './Navigation'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron
        title={faker.name.title()}
        desc={faker.lorem.sentences()}
      />
      <Section
        sectionStyle='about'
        title={'About'}
        content={faker.lorem.sentences()}
      />
      <Section
        sectionStyle='products'
        title={'Products'}
        content={faker.lorem.sentences()}
      >
        <div className='product-card-container'>
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
        </div>
      </Section>
      <Section
        sectionStyle='services'
        title={'Services'}
        content={faker.lorem.sentences()}
      >
        <div className='services-card-container'>
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
          <ServicesCard
            title={'Video Webinars'}
            details={'Ichiban Video Webinars'}
          />
        </div>
      </Section>
    </div>
  )
}

export default App
