import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DropdownListC extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      symbols: this.props.symbols,
      selectedItem: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    symbols: PropTypes.array.isRequired,
    searchHistoricalPrices: PropTypes.func.isRequired
  }
  
  handleChange(event) {
    this.setState({ selectedItem: event.target.value });
    this.props.searchHistoricalPrices(event.target.value);
  }

  render() {
     
    let symboloptions = {};

    symboloptions = (
      <React.Fragment>
        {this.state.symbols.map(symbol => (
          <option value={symbol} key={symbol}>{symbol}</option>
        ))}
      </React.Fragment>
    )

    return (
      <div className="px-3 text-center">
        <form>
          <label className="pl-5 pr-5">
            Select Index:
            <select className="ml-3 pl-2" onChange={this.handleChange}>
              {symboloptions}
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default DropdownListC
