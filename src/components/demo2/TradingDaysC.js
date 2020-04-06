import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TradingDaysC extends Component {

  static defaultProps = {
    indexquotes: {}
  }

  static propTypes = {
    indexquotes: PropTypes.object.isRequired
  }

  render() {
    const indexdaygain = {
      color: 'green'
    }
    const indexdayloss = {
      color: 'red'
    }

    return (
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover text-center">
          <thead className="bg-info text-light">
            <tr>
              <td>Trading Date</td>
              <td>Closing Price</td>
              <td>Daily Gain/Loss</td>
              <td>Daily % Change</td>
              <td>Daily High</td>
              <td>Daily Low</td>
              <td>Day Points Range</td>
            </tr>
          </thead>
          <tbody>
            {this.props.indexquotes.tradingdays.map((day, i) => (
              <tr key={i}>
                <td>{day.day}</td>
                <td>{day.dayClose}</td>
                {(day.dayPtsChgPrevDay.substring(0,1) === '-' ?
                  (<td style={indexdayloss}>{day.dayPtsChgPrevDay}</td>) :
                  (<td style={indexdaygain}>{day.dayPtsChgPrevDay}</td>)
                )}
                {(day.dayPctChgPrevDay.substring(0,1) === '-' ?
                  (<td style={indexdayloss}>{day.dayPctChgPrevDay}</td>) :
                  (<td style={indexdaygain}>{day.dayPctChgPrevDay}</td>)
                )}
                <td>{day.dayHigh}</td>
                <td>{day.dayLow}</td>
                <td>{day.dayRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TradingDaysC