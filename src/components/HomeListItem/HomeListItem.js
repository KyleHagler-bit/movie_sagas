import React, { Component } from "react";
import "./HomeListItem.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import Details from "../Details/Details";


class HomeListItem extends Component {

viewDetails = (id) =>{
  this.props.history.push("/details")
  this.props.dispatch({type: 'GET_DETAILS', payload:id})
}


  render() {
    const { movieItem } = this.props;
    return (
      // <Grid item sm={3}>
      <Paper id ='movieContent' style = {{borderRadius: "10%", height: "700px", width: "500px"}} elevation={24} >
        {movieItem.title} <br/>
        <img src={movieItem.poster} onClick={() => this.viewDetails(movieItem.id)}/> <br/>
        <p id='description'>{movieItem.description}</p>
          
        
      </Paper>
      //{/* </Grid> */}
    ); // end return
  } // end render
} // end class HomeListItem

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details:state.details
  };
};

export default withRouter(connect(mapStateToProps)(HomeListItem));