import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: [],
    nameOfGift: undefined,
    priceOfGift: undefined,
    budget: 500,
    totalPriceOfGifts: undefined
  }

  handleNameOfGiftChange = (e) => {
    this.setState({ nameOfGift: e.target.value })
  }

  handleNameOfPriceChange = (e) => {
    this.setState({ priceOfGift: e.target.value })
  }

  addNewGift = (e) => {
    e.preventDefault()
    const newGift = { name: this.state.nameOfGift, price: this.state.priceOfGift }
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.price)
    let budget = this.state.budget
    if (totalPrice + giftPrice > budget) {
      alert('Total price is greater than your total budget.')
      return
    } else {
      let currentBudget = this.state.budget
      currentBudget -= giftPrice
      this.setState({
        budget: currentBudget,
        gifts: newGiftList,
        nameOfGift: '',
        priceOfGift: '' })
    }
  }

  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0
    for (let i = 0; i < list.length; i++) {
      totalPrice += Number(list[i].price)
    }
    return totalPrice
  }

  render () {
    return (
      <div>
        <h3>Budget: ${this.state.budget}</h3>
        <GiftForm
          handleNameOfGiftChange={this.handleNameOfGiftChange}
          handleNameOfPriceChange={this.handleNameOfPriceChange}
          addNewGift={this.addNewGift}
        />
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h3>No Gifts Yet</h3>
        }
      </div>
    )
  }
}

export default ListContainer
