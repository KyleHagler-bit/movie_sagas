import React, { Component } from "react";
import HomeListItem from "../HomeListItem/HomeListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';
// import "./Home.css";
import swal from "sweetalert";


class Home extends Component {
  
  
  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({type: 'GET_MOVIES'})
}

  // React render function
  render() {
    const {movies} = this.props;
    return (
      <div>
       <ul>
                {movies.map((movieItem, index) => {
                    return (
                <HomeListItem key = {index} movieItem={movieItem}/>
                    );
                })}
                </ul>
      </div>
    ); // end return
  } // end render
} // end Home

//pull state from Redux state
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
  };
};

export default withRouter(connect(mapStateToProps)(Home));