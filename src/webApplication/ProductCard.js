import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: 'solid 3px #1abc9c',
    borderRadius: '8px',
    width: '25%',
    color: '#16a085',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1%'
  },
  img: {
    width: '90%'
  }
}

const ProductCard = ({product, price, img}) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={img} />
      <h4> {product} / {price} </h4>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default ProductCard
