import React, { Component } from "react";
import "./Details.css";
import { Paper, Button, IconButton} from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

class Details extends Component {

  componentDidMount() {

    console.log('inside details.js', this.props.details)
    // this.props.dispatch({type: 'GET_DETAILS', payload:this.props.details})

  }

  editPage = () =>{
    this.props.history.push("/edit")
  }

  //DOES NOT WORK AT THE MOMENT
  deleteGenre =(genre)=>{
    this.props.dispatch({type: "REMOVE_GENRE", payload: genre})
  }

  render() {
    const { details, movies } = this.props;
    console.log('inside render', details);
    //Handle case where page is refreshed and state is "lost"
    if (details.length===0){
      return( <div > <br/><br/>
        <h1 style={{color:"white"}}>Oops! Page refresh caused an error</h1>
        <Button variant='contained' id='back' onClick={()=>this.props.history.push("/")}>Back To List</Button>
        </div>
      )
    }
    else {
    return (
      // <Grid item sm={3}>
      <div>
      <br/> <br/>
      <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
        <br /> 
        {/* <pre>{JSON.stringify(this.props.details)}</pre> */}
        <Button variant='contained' id='back' onClick={()=>this.props.history.push("/")}>Back To List</Button>
        <Button variant='contained' id='edit' onClick={()=>this.editPage()}>Edit</Button>

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
                <li>{item2}<IconButton onClick={()=>this.deleteGenre(item2)}><HighlightOffIcon></HighlightOffIcon></IconButton></li>)
              })}
              
            </div>
          );
        })}


        
      </Paper> 
      </div>
      //{/* </Grid> */}
    ); // end return
      }
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