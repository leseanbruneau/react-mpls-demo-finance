import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TradingDaysC from './TradingDaysC'

class QuoteDailyListC extends Component {

  static defaultProps = {
    indexquotes: {}
  }

  static propTypes = {
    indexquotes: PropTypes.object.isRequired
  }

  render() {
    let nbrtradingdays = this.props.indexquotes.tradingdays.length - 1;
    let strtradingdays = 'from ' + this.props.indexquotes.tradingdays[0].day + ' to ' + this.props.indexquotes.tradingdays[nbrtradingdays].day;

    console.log('Refreshing QuoteDailyListC Component - indexquotes')

    return (
      <div>
        <div>Index Symbol: <strong>{this.props.indexquotes.symbol}</strong></div>
        <div>Index Name: <strong>{this.props.indexquotes.name}</strong></div>
        <div>Trading Days: <strong>{strtradingdays}</strong></div>
        <div>Frequency: <strong>Daily</strong></div>
        <hr />
        <TradingDaysC indexquotes={this.props.indexquotes} />
      </div>
    )
  }
}

export default QuoteDailyListC