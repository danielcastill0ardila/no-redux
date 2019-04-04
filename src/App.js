import React, { useEffect, useContext } from 'react';
import { fetchPlayers } from './store/Actions';
import './App.css';
import NavBar from './components/NavBar';
import { Store } from './store/Store';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const App = () => {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.videos.length === 0 && fetchPlayers(dispatch);
  }, [state]);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            CondorSongs
          </Typography>
        </Toolbar>
      </AppBar>
      <NavBar />
    </>
  );
};

export default App;
