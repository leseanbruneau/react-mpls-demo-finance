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

    // Using Firebase Realtime database
    // couple notes
    // 1.  Create File ${PRJ_ROOT_DIR}/.env.local
    // 2.  Add the following line to ${PRJ_ROOT_DIR}/.env.local
    //     REACT_APP_FIREBASE_URL='REST_API_ENDPOINT_URL'
    //
    //     Where REST_API_ENDPOINT_URL is the URL location of JSON object

    // const firebaseDBUrl = process.env.REACT_APP_FIREBASE_URL + '/market-ind.json';
    // console.log(`process.env`, process.env);
    // console.log('REACT_APP_FIREBASE_URL: ', process.env.REACT_APP_FIREBASE_URL);
    // console.log('firebaseDBUrl is: ' + firebaseDBUrl);

    // Using npm package json-server for REST API endpoint
    const jsonLocalhostUrl = 'http://localhost:3001/market-ind';
    

    this.setState({ loadingremote: true });

    //await axios.get(firebaseDBUrl)
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

