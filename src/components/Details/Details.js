import React, { Component } from "react";
// import "./Details.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Details extends Component {

componentDidMount() {
  
  console.log('inside details.js',this.props.details.id)
  this.props.dispatch({type: 'GET_DETAILS', payload:this.props.details})

}


  render() {
    const { details, id } = this.props;
    
    return (
      // <Grid item sm={3}>
      <Paper id ='movieContent' style = {{borderRadius: "10%", height: "700px", width: "500px"}} elevation="24" >
        {details.id} <br/> { details.title}
        <p id='description'>{details.description}</p>
          
        
      </Paper>
      //{/* </Grid> */}
    ); // end return
  } // end render
} // end class HomeListItem

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details: state.details,
  };
};

export default withRouter(connect(mapStateToProps)(Details));