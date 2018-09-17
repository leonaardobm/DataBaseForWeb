import React, { Component } from 'react';
import BeerCard from './BeerCard';
import BeerList from './BeerList';
import './App.css';


class BeerApp extends Component {
  
  randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  }

  render() {
    return (
      <div className="Beer-app">

        <BeerList
          
        />

        
      </div>
    );
  }
}

export default BeerApp;

