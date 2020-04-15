import React from 'react'
import PropTypes from 'prop-types'

const DropdownListF = ({ symbols, searchHistoricalPrices }) => {
  
  const handleChange = event => {
    searchHistoricalPrices(event.target.value);
  }
     
  let symboloptions = {};

  symboloptions = (
    <React.Fragment>
      {symbols.map(symbol => (
        <option value={symbol} key={symbol}>{symbol}</option>
      ))}
    </React.Fragment>
  )

  return (
    <div className="px-3 text-center">
      <form>
        <label className="pl-5 pr-5">
          Select Index:
          <select className="ml-3 pl-2" onChange={handleChange}>
            {symboloptions}
          </select>
        </label>
      </form>
    </div>
  )
}

DropdownListF.propTypes = {
  symbols: PropTypes.array.isRequired,
  searchHistoricalPrices: PropTypes.func.isRequired
};

export default DropdownListF;
