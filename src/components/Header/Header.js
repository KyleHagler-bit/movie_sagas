//OLD HEADER => WANTED TO KEEP OLD INCASE APPBAR DIDNT WORK
// import React, { Component } from "react";

// // header is a controlled component used to render the site header
// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <h1 className="App-title">Movie Sagas</h1>
//       </header>
//     ); // end return
//   } // end render
// } // end class Header

// export default Header;

import React, { } from "react";
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Header.css';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useHistory } from "react-router-dom";

//pulled from MUI documentation. Trying to better understand it all
export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //moves user to admin page
  const handleAdmin = () => {
    history.push("/admin")
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" id="appBar">
      <IconButton id="iconBtn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <IconButton id="adminBtn" aria-haspopup="true" onClick={handleAdmin}>
        <SupervisorAccountIcon fontSize="large" />
      </IconButton>
      <Typography id="pageTitle" variant="h3" color="inherit">
        Movie Sagas
     </Typography>
      {/*MENU DOES NOT ACTUALLY FUNCTION AT THIS TIME */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > {/*List of movie genres in database. Would this need to update if genres updated? */}
        <MenuItem onClick={handleClose} style={{ color: 'red' }}>NOT YET FUNCTIONAL</MenuItem>
        <MenuItem onClick={handleClose}>Adventure</MenuItem>
        <MenuItem onClick={handleClose}>Animated</MenuItem>
        <MenuItem onClick={handleClose}>Biographical</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
        <MenuItem onClick={handleClose}>Disaster</MenuItem>
        <MenuItem onClick={handleClose}>Drama</MenuItem>
        <MenuItem onClick={handleClose}>Epic</MenuItem>
        <MenuItem onClick={handleClose}>Fantasy</MenuItem>
        <MenuItem onClick={handleClose}>Musical</MenuItem>
        <MenuItem onClick={handleClose}>Psychological Thriller</MenuItem>
        <MenuItem onClick={handleClose}>Romantic</MenuItem>
        <MenuItem onClick={handleClose}>Science Fiction</MenuItem>
        <MenuItem onClick={handleClose}>Space-Opera</MenuItem>
        <MenuItem onClick={handleClose}>Superhero</MenuItem>
      </Menu>
    </AppBar>
  );
}



