import React from 'react';
import BeerCard from './BeerCard'
import LoadingBeers from './LoadingBeers';

const axios = require('axios');

class BeerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            queryResponse: undefined,
            beerName: undefined,
            loaded: false
        }
    }

    componentDidMount() {
        axios.get('https://api.punkapi.com/v2/beers/')
            .then((response) => {
                this.setState({
                    queryResponse: response.data,
                    loaded: true
                })
                console.log(response.data)
            })
            .catch((error) => console.log(error));
        console.log(this.state.queryResponse);
    }

    render() {
        return (
            <div>
                {this.state.loaded ?
                    this.state.queryResponse.map((el, index) => {
                        return (
                            <BeerCard 
                            key = {index}
                            beerName = {el.name}
                            ibu = {el.ibu}
                            foodPairing = {el.food_pairing}
                            className = {'Beer-card'}
                            />
                        );
                    })
                    : <LoadingBeers/>
                }
            </div>

        ); 
    }
}

export default BeerList;