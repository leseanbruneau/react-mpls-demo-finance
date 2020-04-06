import React, { Component } from 'react'
import DropdownListC from './components/demo2/DropdownListC'
import QuoteDailyListC from './components/demo2/QuoteDailyListC'

import axios from 'axios'

class AppDemo2C extends Component {
  constructor() {
    super();
    this.state = {
      allquotes: [],
      indexquotes: [],
      loadingremote: true
    };
  }

  async componentDidMount() {
    const jsonLocalhostUrl = 'http://localhost:3001/market-ind'
    //const firebaseDBUrl = null

    this.setState({ loadingremote: true });

    await axios.get(jsonLocalhostUrl)
      .then(response => {
        this.setState({ allquotes: response.data});
      })
      .then(() => {
          this.setState({ indexquotes: this.state.allquotes.filter(function(ind) {
            return ind.symbol === '^DJI'; 
          })
        })
      })
      .catch(error => {
        console.log('error fetching data from remote source...');
      })
  
    this.setState({ loadingremote: false });
  }

  searchHistoricalPrices = (text) => {
    this.setState({ loadinglocal: true });
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
    this.setState({ loadinglocal: false });
  }

  render() {
    let symbols = [];

    if(this.state.allquotes) {
      this.state.allquotes.map((quote,i) => (
        symbols.push(quote.symbol + ' - ' + quote.name)
      ))
    }

    if(this.state.loadingremote) return(<div>Loading Market Index Data</div>);

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

export default AppDemo2C

