import React, { Component } from "react";
import "./Admin.css";
import { Paper, Button, Input } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Admin extends Component {

  state={
    username: '',
    password:'',
  }
  
  handleChange = (event, fieldName) => {

    this.setState({ [fieldName]: event.target.value });
  };


  checkLogin = () =>{
    if (this.state.username==='camera' && this.state.password==='action'){
      this.props.history.push("/adminLogin")
    } else {
      return alert('Oops! Incorrect login')
    }

  }


  render() {

    return (
      // <Grid item sm={3}>
      <div> <br /> <br />
        <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
          <h3>Welcome to Admin Page!</h3>
          <h4>Sorry I didn't get more done</h4>
          <Button variant='contained' id='back' onClick={() => this.props.history.push("/")}>Back To List</Button> <br />
          <Input id='user' placeholder="username" onChange={(event) => this.handleChange(event, "username")}></Input> <br /> <br />
          <Input id='pass' placeholder="password" onChange={(event) => this.handleChange(event, "password")}></Input> <br />
          <Button variant='contained' id='login' color="secondary" onClick={() => this.checkLogin()}>Login</Button>
        </Paper>
      </div>
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