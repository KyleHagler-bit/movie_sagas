import React, { Component } from "react";
import "./HomeListItem.css";
import { Paper} from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import Details from "../Details/Details";

class HomeListItem extends Component {

  viewDetails = (id) => {
    this.props.history.push("/details")
    this.props.dispatch({ type: 'GET_DETAILS', payload: id })
    this.props.dispatch({
      //Here, we grab the movie we are currently clicked on
      type: 'CURRENT_ITEM', payload: [
        {
          id: id,
          title: this.props.movieItem.title,
          description: this.props.movieItem.description
        }
      ]
    })
  }

  render() {
    const { movieItem } = this.props;
    return (
      // <Grid item sm={3}>
      <Paper id='movieContent' style={{ borderRadius: "10%", height: "800px", width: "500px" }} elevation={24} >
        <h1>{movieItem.title}</h1> <br />
        <img id='poster' src={movieItem.poster} alt='movie description' onClick={() => this.viewDetails(movieItem.id)} /> <br />
        <p id='description'>{movieItem.description}</p>
      </Paper>
      //{/* </Grid> */}
    ); // end return
  } // end render
} // end class HomeListItem

//Pretty sure I dont need mapStateToProps here since we passed information down into listitem
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default withRouter(connect(mapStateToProps)(HomeListItem));