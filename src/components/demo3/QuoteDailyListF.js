import React from 'react'
import PropTypes from 'prop-types'
import TradingDaysF from './TradingDaysF'

const QuoteDailyListF = ({ indexquotes }) => {

  let nbrtradingdays = indexquotes.tradingdays.length - 1;
  let strtradingdays = 'from ' + indexquotes.tradingdays[0].day + ' to ' + indexquotes.tradingdays[nbrtradingdays].day;

  return (
    <div>
      <div>Index Symbol: <strong>{indexquotes.symbol}</strong></div>
      <div>Index Name: <strong>{indexquotes.name}</strong></div>
      <div>Trading Days: <strong>{strtradingdays}</strong></div>
      <div>Frequency: <strong>Daily</strong></div>
      <hr />
      <TradingDaysF indexquotes={indexquotes} />
    </div>
  )
}

QuoteDailyListF.propTypes = {
  indexquotes: PropTypes.object.isRequired
}

export default QuoteDailyListF;