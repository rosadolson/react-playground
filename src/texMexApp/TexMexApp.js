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

  handleChange = (e) => {
    let wordToSearch = e.target.value
    this.setState({ searchEntry: wordToSearch })
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
          <h1>{data.company[0].title}</h1>
        </div>
        <h2>Search:</h2>
        <p>You entered: {this.state.searchEntry}</p>
        <form>
          <input type='text' placeholder='Search' onChange={this.handleChange} />
          <button type='button' onSubmit={this.submitSearch}>Search</button>
        </form>
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
