import React, { Component } from "react";
import "./HomeListItem.css";
import { Paper, Button, Typography, Grid } from '@material-ui/core'; //use material UI


class HomeListItem extends Component {
  render() {
    const { movieItem } = this.props;
    return (
      // <Grid item sm={3}>
      <Paper id ='movieContent' style = {{borderRadius: "10%", height: "700px", width: "500px"}} elevation="24" >
        {movieItem.title} <br/>
        <img src={movieItem.poster}/> <br/>
        <p id='description'>{movieItem.description}</p>
          
        
      </Paper>
      //{/* </Grid> */}
    ); // end return
  } // end render
} // end class HomeListItem

export default HomeListItem;