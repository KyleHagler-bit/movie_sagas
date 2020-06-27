import React, { Component } from "react";
import "./Details.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Details extends Component {

  componentDidMount() {

    console.log('inside details.js', this.props.details)
    // this.props.dispatch({type: 'GET_DETAILS', payload:this.props.details})

  }

  editPage = () =>{
    this.props.history.push("/edit")
    // this.props.dispatch({type: 'GET_DETAILS', payload:id})
  }

  render() {
    const { details, id, movies } = this.props;
    console.log('inside render', details);
    return (
      // <Grid item sm={3}>
      <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
        <br />
        {/* <pre>{JSON.stringify(this.props.details)}</pre> */}
        <button onClick={()=>this.props.history.push("/")}>Back To List</button>
        <button onClick={()=>this.editPage}>Edit</button>

        {details.map((item, index) => {
          let currentId = item.movies_id
          return (
            <div id="description">

              <h2>{item.title}</h2>

              {movies.map((item, index) => {
                if (currentId === item.id) {
                  return (
                    <>
                      <p>{item.description}</p>


                    </>
                  );
                }
              })}
              {/*since using agg_array in database, need to display all genres nicely*/ }
              {item.genres.map((item2,index)=>{
                return(
                <li>{item2}</li>)
              })}
              
            </div>
          );
        })}



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