import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({

    card: {
      maxWidth: 300,
    },
    media: {
      height:   0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  });

class BeerCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            expanded: false
        };
        this.state = {
            name: '',
        }

    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render(){
        const { classes } = this.props;
        //console.log("printing the props.classes from card: ")
        //console.log(classes);
        
        return(
                <Card className={classes.card}>
                    <CardHeader
                        title={"Name: " + this.props.beerName}
                    />

                    <br/>

                    <CardContent>
                        <Typography component="p">
                            {"IBU: " + this.props.ibu}
                        </Typography>
                    </CardContent>

                    <br/>

                    <CardActions className={classes.actions} disableActionSpacing>
            
                    <IconButton
                        className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {"Suggested food Pairing: " + this.props.foodPairing[0]}
                                </Typography>
                            </CardContent>
                        </Collapse>
                </Card>
        )
    }
}

export default withStyles(styles)(BeerCard);