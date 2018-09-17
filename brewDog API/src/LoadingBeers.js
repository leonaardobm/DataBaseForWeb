import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoadingBeers extends React.Component {

  render() {
    return (
      <div className={'centered'}>
        <CircularProgress className={'centered'}/>
        <p>Loading beer list</p>
      </div>
    );
  }

}

//CircularIndeterminate.propTypes = {
//  classes: PropTypes.object.isRequired,
//};

export default LoadingBeers;