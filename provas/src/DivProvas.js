import React, { Component } from 'react';
import cardProva from './cardProva';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const axios = require('axios');

class DivProvas extends React.Component {

  constructor(props) {
    super(props)
    this.state = {provas: []}
  }


  componentDidMount() {
    axios.get('http://educaio.ufrn.br/api/provas?filter[include]=inscricoes')
           .then((response) => {
             this.setState({provas: response.data})
             console.log(response.data)})
           .catch((error) => console.log(error));
  }

  render() {
    const provas = this.state.provas;
    //const { classes } = props;

    return(
      <div>
      <Button variant="contained" >
        Default
      </Button>

        {provas.map((prova) => <cardProva key={prova.id} prova={prova} />)}

      </div>
    )


  }
}

export default cardProva;
