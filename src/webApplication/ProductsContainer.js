import React from 'react'
import faker from 'faker'
import Section from './Section'
import ProductCard from './ProductCard'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'space-between'
  }
}

const ProductsContainer = () => {
  return (
    <div style={styles.container}>
      <Section
        title={'Products'}
        content={faker.lorem.sentences()}
      >
        <div>
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
    </div>
  )
}

export default ProductsContainer
