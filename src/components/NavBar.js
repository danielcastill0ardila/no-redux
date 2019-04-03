import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Players from './Players';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import People from '@material-ui/icons/People';
import Heart from '@material-ui/icons/Favorite';
function TabContainer(props) {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
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
            <Tab label="Players" icon={<People />} />
            <Tab label="Fav Players" icon={<Heart />} />
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
