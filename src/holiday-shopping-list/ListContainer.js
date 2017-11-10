import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: undefined,
    nameOfGift: undefined,
    priceOfGift: undefined,
    budget: 500,
    totalPriceOfGifts: undefined
  }

  componentDidMount () {
    const giftsArray = [{name: 'Apple TV', price: 300}, {name: 'candy', price: 3}]
    this.setState({ gifts: giftsArray })
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
      this.setState({ gifts: newGiftList })
      this.setState({ nameOfGift: '' })
      this.setState({ priceOfGift: '' })
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
