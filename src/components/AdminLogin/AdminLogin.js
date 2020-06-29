import React, { Component } from "react";
// import "./AdminLogin.css";
import { Paper, Button, Input } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class AdminLogin extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' })
  }

  render() {
    const { genres } = this.props
    console.log(genres)
    return (
      // <Grid item sm={3}>
      <div> <br /> <br />
        <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
          <Button variant='contained' id='back' onClick={() => this.props.history.push("/")}>Back To List</Button>
          <h3> Current movie genre list includes:</h3>
          {genres.map((item) => {
            return (
              <li>{item.name}</li>)
          })}
        </Paper>
      </div>
      //{/* </Grid> */}
    ); // end return

  } // end render
} // end class 

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    details: state.details,
  };
};

export default withRouter(connect(mapStateToProps)(AdminLogin));