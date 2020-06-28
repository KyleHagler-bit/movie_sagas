import React, { Component } from "react";
// import "./Admin.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Admin extends Component {


  render() {
    
    return (
      // <Grid item sm={3}>
      
      <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
        <h3>Welcome to Admin Page!</h3>
        <h4>Sorry I didn't get more done</h4>
        <Button variant='contained' id='back' onClick={()=>this.props.history.push("/")}>Back To List</Button>
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

export default withRouter(connect(mapStateToProps)(Admin));