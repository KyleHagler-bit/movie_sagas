import React, { Component } from "react";
// import HomeListItem from "../HomeListItem/HomeListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';
// import "./Home.css";
import swal from "sweetalert";


class Home extends Component {
  //on click of next button, directs user to customer info form
  

  // React render function
  render() {
    
    return (
      <div>
       
      </div>
    ); // end return
  } // end render
} // end Home

// pull state from Redux state
// const mapStateToProps = (state) => {
//   return {
//     pizzas: state.pizzas,
//     currentOrder: state.currentOrder,
//   };
// };

export default withRouter(connect(mapStateToProps)(Home));