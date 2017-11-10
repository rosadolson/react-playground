import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ setMenuItemsToMedium, setMenuItemsToSpicy, setMenuItemsToMild, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList }) => {
  return (
    <div>
      <form>
        <input onChange={handleSearchTermChange} value={searchTerm} />
        <button type='button' onClick={updateMenuList}>Search</button>
        <button type='button' onClick={resetMenuList}>Reset</button>
        <button type='button' onClick={setMenuItemsToMild}>Only Mild</button>
        <button type='button' onClick={setMenuItemsToMedium}>Only Medium</button>
        <button type='button' onClick={setMenuItemsToSpicy}>Only Spicy</button>
      </form>
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setMenuItemsToMild: PropTypes.func.isRequired,
  setMenuItemsToMedium: PropTypes.func.isRequired,
  setMenuItemsToSpicy: PropTypes.func.isRequired
}

export default SearchForm
