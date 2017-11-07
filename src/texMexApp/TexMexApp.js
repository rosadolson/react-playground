import React, {Component} from 'react'
import './styles.css'
import data from './data'
import MenuSection from './MenuSection'
import ContactSection from './ContactSection'
import NavBar from './NavBar'

class MenuSearch extends Component {
  state = {
    foods: undefined,
    searchEntry: undefined
  }

  componentWillMount () {
    this.setState({ foods: data.items })
  }

  resetSearch = () => {
    this.setState({ foods: data.items })
    this.setState({ searchEntry: 'Enter a new search!' })
  }

  handleChange = (e) => {
    let wordToSearch = e.target.value
    this.setState({ searchEntry: wordToSearch })
  }

  spiceyFoods = () => {
    const foods = this.state.foods
    const reallySpicyFoods = foods.filter(item => {
      return item.spiceLevel >= 7
    })
    this.setState({ foods: reallySpicyFoods })
  }

  mediumFoods = () => {
    const foods = this.state.foods
    const mediumSpiceFoods = foods.filter(item => {
      return (item.spiceLevel > 3 && item.spiceLevel < 7)
    })
    this.setState({ foods: mediumSpiceFoods })
  }

  mildFoods = () => {
    const foods = this.state.foods
    const mildSpiceFoods = foods.filter(item => {
      return item.spiceLevel <= 3
    })
    this.setState({ foods: mildSpiceFoods })
  }

  submitSearch = (e) => {
    e.preventDefault()
    const foods = this.state.foods
    const searchEntry = this.state.searchEntry
    if (!searchEntry) {
      alert('Please enter a search term.')
    } else {
      const matchedFoods = foods.filter(item => {
        return item.name.split(' ').includes(searchEntry)
      })
      if (matchedFoods.length === 0) {
        this.setState({ foods: ['Nothing matches your search.'] })
      } else {
        this.setState({ foods: matchedFoods })
      }
    }
  }

  render () {
    return (
      <div>
        <div>
          <NavBar navTitle={data.company[0].title} />
          <div className='header-section'>
            <h1 className='main-title'>Lous Tex Mex</h1>
            <img className='header-img' src={data.items[13].img} />
          </div>
        </div>
        <h1 className='menu-header'>Dinner Menu</h1>
        <div className='search-section'>
          <form>
            <p>Your Search: {this.state.searchEntry}</p>
            <input type='text' placeholder='Search' onChange={this.handleChange} />
            <button type='button' onClick={this.submitSearch}>Search</button>
            <button type='button' onClick={this.resetSearch}>Reset</button>
          </form>
          <form>
            <p>Search by Spiciness:</p>
            <input type='checkbox'className='spicy-checkbox' onClick={this.spiceyFoods} />
            <span className={`fa fa-thermometer-full spicy-icon`} />
            <input type='checkbox'className='medium-checkbox' onClick={this.mediumFoods} />
            <span className={`fa fa-thermometer-half medium-icon`} />
            <input type='checkbox'className='mild-checkbox' onClick={this.mildFoods} />
            <span className={`fa fa-thermometer-empty mild-icon`} />
          </form>
        </div>
        <div>
          <MenuSection arr={this.state.foods} />
          <ContactSection
            arr={data.address}
            phone={data.phone} />
        </div>
      </div>
    )
  }
}

export default MenuSearch
