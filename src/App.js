import React, { useEffect, useContext } from 'react';
import { fetchPlayers } from './Actions';
import './App.css';
import NavBar from './NavBar';
import { Store } from './Store';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

const App = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.players.length === 0 && fetchPlayers(dispatch);
  }, [state]);
  console.log(state);
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Soccer players
          </Typography>
        </Toolbar>
      </AppBar>
      <NavBar />
    </>
  );
};

export default App;
