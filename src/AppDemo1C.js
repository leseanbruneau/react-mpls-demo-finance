import React, { Component } from 'react'
import DropdownListC from './components/demo1/DropdownListC'
import QuoteDailyListC from './components/demo1/QuoteDailyListC'

class AppDemo1C extends Component {
  constructor() {
    super();
    this.state = {
      allquotes: localIndPrices,
      indexquotes: localIndPrices.filter(function(ind) {
        return ind.symbol === '^DJI'; 
      })
    };
  }

  searchHistoricalPrices = (text) => {
    if(text.substring(0,4) === '^DJI') {
      this.setState({ indexquotes: this.state.allquotes.filter(function(ind) {
          return ind.symbol === '^DJI'; 
        })
      });
    }

    if(text.substring(0,5) === '^IXIC') {
      this.setState({ indexquotes: this.state.allquotes.filter(function(ind) {
          return ind.symbol === '^IXIC'; 
        })
      });
    }

    if(text.substring(0,5) === '^GSPC') {
      this.setState({ indexquotes: this.state.allquotes.filter(function(ind) {
          return ind.symbol === '^GSPC'; 
        })
      });
    }
  }

  render() {
    let symbols = [];

    if(this.state.allquotes) {
      this.state.allquotes.map((quote,i) => (
        symbols.push(quote.symbol + ' - ' + quote.name)
      ))
    }
    return (
      <div className="container" style={{paddingTop: '75px'}}>
        <h1 className="text-center">Market Major Indexes Closing Prices</h1>
        <hr />
        <DropdownListC symbols={symbols}  searchHistoricalPrices={ this.searchHistoricalPrices } />
        <hr />
        <QuoteDailyListC indexquotes={this.state.indexquotes[0]} />
      </div>
    )
  }
}

export default AppDemo1C


const localIndPrices = [
  {"symbol":"^DJI","name":"Dow Jones Industrial Average","tradingdays":[{"day":"2020-03-17","dayClose":"21237.38","dayPtsChgPrevDay":"1048.86","dayPctChgPrevDay":"5.20%","dayHigh":"21379.35","dayLow":"19882.26","dayRange":"1497.09"},{"day":"2020-03-18","dayClose":"19898.92","dayPtsChgPrevDay":"-1338.46","dayPctChgPrevDay":"-6.30%","dayHigh":"20489.33","dayLow":"18917.46","dayRange":"1571.87"},{"day":"2020-03-19","dayClose":"20087.19","dayPtsChgPrevDay":"188.27","dayPctChgPrevDay":"0.95%","dayHigh":"20442.63","dayLow":"19177.13","dayRange":"1265.50"},{"day":"2020-03-20","dayClose":"19173.98","dayPtsChgPrevDay":"-913.21","dayPctChgPrevDay":"-4.55%","dayHigh":"20531.26","dayLow":"19094.27","dayRange":"1436.99"},{"day":"2020-03-23","dayClose":"18591.93","dayPtsChgPrevDay":"-582.05","dayPctChgPrevDay":"-3.04%","dayHigh":"19121.01","dayLow":"18213.65","dayRange":"907.36"},{"day":"2020-03-24","dayClose":"20704.91","dayPtsChgPrevDay":"2112.98","dayPctChgPrevDay":"11.37%","dayHigh":"20737.70","dayLow":"19649.25","dayRange":"1088.45"},{"day":"2020-03-25","dayClose":"21200.55","dayPtsChgPrevDay":"495.64","dayPctChgPrevDay":"2.39%","dayHigh":"22019.93","dayLow":"20538.34","dayRange":"1481.59"},{"day":"2020-03-26","dayClose":"22552.17","dayPtsChgPrevDay":"1351.62","dayPctChgPrevDay":"6.38%","dayHigh":"22595.06","dayLow":"21427.10","dayRange":"1167.96"},{"day":"2020-03-27","dayClose":"21636.78","dayPtsChgPrevDay":"-915.39","dayPctChgPrevDay":"-4.06%","dayHigh":"22327.57","dayLow":"21469.27","dayRange":"858.30"}]},{"symbol":"^IXIC","name":"NASDAQ","tradingdays":[{"day":"2020-03-17","dayClose":"7334.78","dayPtsChgPrevDay":"430.19","dayPctChgPrevDay":"6.23%","dayHigh":"7406.23","dayLow":"6828.91","dayRange":"577.32"},{"day":"2020-03-18","dayClose":"6989.84","dayPtsChgPrevDay":"-344.94","dayPctChgPrevDay":"-4.70%","dayHigh":"7182.83","dayLow":"6686.36","dayRange":"496.47"},{"day":"2020-03-19","dayClose":"7150.58","dayPtsChgPrevDay":"160.74","dayPctChgPrevDay":"2.30%","dayHigh":"7341.38","dayLow":"6858.38","dayRange":"483.00"},{"day":"2020-03-20","dayClose":"6879.52","dayPtsChgPrevDay":"-271.06","dayPctChgPrevDay":"-3.79%","dayHigh":"7354.44","dayLow":"6854.67","dayRange":"499.77"},{"day":"2020-03-23","dayClose":"6860.67","dayPtsChgPrevDay":"-18.85","dayPctChgPrevDay":"-0.27%","dayHigh":"6984.94","dayLow":"6631.42","dayRange":"353.52"},{"day":"2020-03-24","dayClose":"7417.86","dayPtsChgPrevDay":"557.19","dayPctChgPrevDay":"8.12%","dayHigh":"7418.37","dayLow":"7169.86","dayRange":"248.51"},{"day":"2020-03-25","dayClose":"7384.30","dayPtsChgPrevDay":"-33.56","dayPctChgPrevDay":"-0.45%","dayHigh":"7671.21","dayLow":"7276.40","dayRange":"394.81"},{"day":"2020-03-26","dayClose":"7797.54","dayPtsChgPrevDay":"413.24","dayPctChgPrevDay":"5.60%","dayHigh":"7809.83","dayLow":"7462.21","dayRange":"347.62"},{"day":"2020-03-27","dayClose":"7502.38","dayPtsChgPrevDay":"-295.16","dayPctChgPrevDay":"-3.79%","dayHigh":"7716.24","dayLow":"7491.14","dayRange":"225.10"}]},{"symbol":"^GSPC","name":"S&P 500","tradingdays":[{"day":"2020-03-17","dayClose":"2529.19","dayPtsChgPrevDay":"143.06","dayPctChgPrevDay":"6.00%","dayHigh":"2553.93","dayLow":"2367.04","dayRange":"186.89"},{"day":"2020-03-18","dayClose":"2398.10","dayPtsChgPrevDay":"-131.09","dayPctChgPrevDay":"-5.18%","dayHigh":"2453.57","dayLow":"2280.52","dayRange":"173.05"},{"day":"2020-03-19","dayClose":"2409.39","dayPtsChgPrevDay":"11.29","dayPctChgPrevDay":"0.47%","dayHigh":"2466.97","dayLow":"2319.78","dayRange":"147.19"},{"day":"2020-03-20","dayClose":"2304.92","dayPtsChgPrevDay":"-104.47","dayPctChgPrevDay":"-4.34%","dayHigh":"2453.01","dayLow":"2295.56","dayRange":"157.45"},{"day":"2020-03-23","dayClose":"2237.40","dayPtsChgPrevDay":"-67.52","dayPctChgPrevDay":"-2.93%","dayHigh":"2300.73","dayLow":"2191.86","dayRange":"108.87"},{"day":"2020-03-24","dayClose":"2447.33","dayPtsChgPrevDay":"209.93","dayPctChgPrevDay":"9.38%","dayHigh":"2449.71","dayLow":"2344.44","dayRange":"105.27"},{"day":"2020-03-25","dayClose":"2475.56","dayPtsChgPrevDay":"28.23","dayPctChgPrevDay":"1.15%","dayHigh":"2571.42","dayLow":"2407.53","dayRange":"163.89"},{"day":"2020-03-26","dayClose":"2630.07","dayPtsChgPrevDay":"154.51","dayPctChgPrevDay":"6.24%","dayHigh":"2637.01","dayLow":"2500.72","dayRange":"136.29"},{"day":"2020-03-27","dayClose":"2541.47","dayPtsChgPrevDay":"-88.60","dayPctChgPrevDay":"-3.37%","dayHigh":"2615.91","dayLow":"2520.02","dayRange":"95.89"}]}
]