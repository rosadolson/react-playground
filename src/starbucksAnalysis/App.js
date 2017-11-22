import React from 'react'
import data from './data'
import DrinkList from './DrinkList'

const App = () => {
  // const classicEspresso = data.filter(item => {
  //   return item.category === 'Classic Espresso Drinks'
  // })
  // const signatureEspresso = data.filter(item => {
  //   return item.category === 'Signature Espresso Drinks'
  // })
  const noMilk = data.filter(item => {
    let itemArray = item.beveragePrep.split(' ')
    return itemArray[itemArray.length - 1] !== 'Milk'
  })
  return (
    <div>
      {/* <h1>Classic Espresso</h1>
      <DrinkList data={classicEspresso} />
      <h1>Signature Espresso</h1>
      <DrinkList data={signatureEspresso} /> */}
      <h1>Milk Free Beverages</h1>
      <DrinkList data={noMilk} />
    </div>
  )
}

export default App
