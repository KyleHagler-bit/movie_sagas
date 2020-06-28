import React, { Component } from "react";
import "./Edit.css";
import { Paper, Button, Input } from '@material-ui/core'; //use material UI
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Edit extends Component {

  //this works for getting the info I need but messes up on refresh
  state = {
    id: this.props.currentItem[0].id,
    title: this.props.currentItem[0].title,
    description: this.props.currentItem[0].description
  };

  handleChange = (event, fieldName) => {

    this.setState({ [fieldName]: event.target.value });
  };

  //dispatch to update movies as well as push user back to details
  submit = () => {
    console.log('current state of edit.js on submit', this.state)
    this.props.dispatch({ type: "UPDATE_MOVIES", payload: this.state })
    this.props.history.push("/details");

  }
  //I tried using conditional to stop refresh error but the state gets upset anyway
  render() {
    // const { details, id, movies } = this.props;
    if (this.props.currentItem.length > 0) {
      return (
        // <Grid item sm={3}>
        <div> <br /> <br />
          <Paper id='detailsContent' style={{ borderRadius: "10%", height: "700px", width: "500px" }} elevation={24} >
            <Input id='editTitle' placeholder='Movie Title' defaultValue={this.state.title}
              onChange={(event) => this.handleChange(event, "title")}></Input><br /><br />
            <textarea rows='20' id='editDescription' placeholder='Movie Description' defaultValue={this.state.description}
              onChange={(event) => this.handleChange(event, "description")}></textarea>
            <Button id='cancel' variant='contained' onClick={() => this.props.history.push("/details")}>Cancel</Button>
            <Button id='save' variant='contained' onClick={() => this.submit()}> Save</Button> <br />
          </Paper>
        </div>
        //{/* </Grid> */}
      ); // end return
    }
  } // end render
} // end class HomeListItem

const mapStateToProps = (state) => {
  return {
    currentItem: state.currentItem
  };
};

export default withRouter(connect(mapStateToProps)(Edit));