import React, { Component } from "react";
// import "./Edit.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Edit extends Component {

  state = {
    id:this.props.currentItem[0].id,
    title:'',
    description:''
  };

  componentDidMount() {

    console.log('inside details.js', this.props.details)
    // this.props.dispatch({type: 'GET_DETAILS', payload:this.props.details})

  }

  handleChange = (event, fieldName) => {
    
    this.setState({ [fieldName]: event.target.value });
  };


  submit =(id) =>{
    console.log('current state of edit.js on submit',this.state)
    // this.props.dispatch({ type: "CURRENT_ITEM", payload: this.state });
    this.props.dispatch({type:"UPDATE_MOVIES", payload: this.state})
    this.props.history.push("/details");
    
  }

  render() {
    const { details, id, movies } = this.props;
    
    return (
      // <Grid item sm={3}>
      <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
        <button onClick={()=>this.props.history.push("/details")}>Cancel</button>
        <button onClick={()=>this.submit()}> Save</button> <br/>

        <input id='editTitle' placeholder='Movie Title' 
        onChange={(event) => this.handleChange(event, "title")}></input><br/>
        <input id='editDescription' placeholder='Movie Description'
        onChange={(event) => this.handleChange(event, "description")}></input>

{details.map((item, index) => {
          let currentId = item.movies_id
          
          return (
            <div id="description">

              <h2>{item.title}</h2>
              {currentId}

              {movies.map((item, index) => {
                if (currentId === item.id) {
                  return (
                    <>
                      <p>{item.description}</p>


                    </>
                  );
                }
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
    currentItem:state.currentItem
  };
};

export default withRouter(connect(mapStateToProps)(Edit));