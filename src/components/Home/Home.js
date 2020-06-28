import React, { Component } from "react";
import HomeListItem from "../HomeListItem/HomeListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import "./Home.css";

class Home extends Component {

  componentDidMount() {
    // use component did mount to dispatch an action to request the plantList from the API
    this.props.dispatch({ type: 'GET_MOVIES' })
  }

  // React render function
  render() {
    const { movies } = this.props;
    return (
      <div>
        <ul> {/*Here we map over all the movies to send to our list item */}
          {movies.map((movieItem, index) => {
            return (
              <HomeListItem key={index} movieItem={movieItem} />
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
  };
};

export default withRouter(connect(mapStateToProps)(Home));