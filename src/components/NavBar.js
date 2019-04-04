import React, { useState, useContext } from 'react';
import {Store} from '../store/Store';
import {searchSong} from '../store/Actions';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Players from './Players';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Music from '@material-ui/icons/LibraryMusic';
import Heart from '@material-ui/icons/Favorite';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Search';

import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state/index';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
function TabContainer(props) {
  const {dispatch} = useContext(Store);
  const handleChange = (event)=>{
   
    searchSong(event.target.value,dispatch)
  }
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
      <CardActions style={{ float: 'right' }}>
        <PopupState variant="popover" popupId="demo-popup-popover">
          {popupState => (
            <div>
          
              <Fab color="secondary" size="small" aria-label="Add" {...bindTrigger(popupState)}>
                <AddIcon />
              </Fab>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <div style={{padding:'20px'}} ><TextField
                  id="standard-name"
                  label="Search video"
             
                 
                  onChange={handleChange}
                  margin="normal"
                /></div>
              </Popover>
            </div>
          )}
    </PopupState>
      </CardActions>
    </Card>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const NavBar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_, value) => {
    setValue(value);
  };
  return (
    <>
      <div style={{ padding: '84px 360px' }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Songs" icon={<Music />} />
            <Tab label="Fav Songs" icon={<Heart />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <Players />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>

    </>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default NavBar;
