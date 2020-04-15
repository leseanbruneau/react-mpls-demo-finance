import React, { useState, useEffect } from 'react'
import DropdownListF from './components/demo3/DropdownListF'
import QuoteDailyListF from './components/demo3/QuoteDailyListF'

import axios from 'axios'

const AppDemo3F = () => {

  const [allquotes, setAllquotes] = useState([]);
  const [indexquotes, setIndexquotes] = useState([]);
  const [loadingremote, setLoadingremote] = useState(true);

  useEffect(() => {

    const getAllData = async () => {

      //const jsonLocalhostUrl = 'http://localhost:3001/market-ind';
      const firebaseDBUrl = process.env.REACT_APP_FIREBASE_CONFIG.databaseURL + '/market-ind.json';
      
      //await axios.get(jsonLocalhostUrl)
      await axios.get(firebaseDBUrl)
        .then(response => {
          setAllquotes(response.data);
        })
        .catch(error => {
          console.log('error fetching data from remote source...');
        });

      setLoadingremote(false);
    }

    getAllData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchHistoricalPrices = (text) => {

    setLoadingremote(true);

    if(text.substring(0,4) === '^DJI') {
      setIndexquotes(allquotes.filter(function(ind) {
        return ind.symbol === '^DJI'; 
      }))
    }

    if(text.substring(0,5) === '^IXIC') {
      setIndexquotes(allquotes.filter(function(ind) {
        return ind.symbol === '^IXIC'; 
      }))
    }

    if(text.substring(0,5) === '^GSPC') {
      setIndexquotes(allquotes.filter(function(ind) {
        return ind.symbol === '^GSPC'; 
      }))
    }

    setLoadingremote(false);
  }

  let symbols = [];

  if(allquotes) {
    allquotes.map((quote,i) => (
      symbols.push(quote.symbol + ' - ' + quote.name)
    ))
  }

  if(loadingremote && indexquotes.length < 1) {
    if(allquotes.length > 1) {
      searchHistoricalPrices('^DJI');
    }      
    return(<div>Loading Market Index Data</div>);
  } 

  return (
    <div className="container" style={{paddingTop: '75px'}}>
      <h1 className="text-center">Market Major Indexes Closing Prices</h1>
      <hr />
      <DropdownListF symbols={symbols}  searchHistoricalPrices={ searchHistoricalPrices } />
      <hr />
      <QuoteDailyListF indexquotes={indexquotes[0]} />
    </div>
  )

}

export default AppDemo3F;

