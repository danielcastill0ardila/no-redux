import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { Store } from './Store';
import Players from './Players';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PhoneIcon from '@material-ui/icons/People';

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, value) => {
    setValue(value);
  };
  return (
    <>
      <div style={{ padding: '138px 360px' }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="secondary"
          >
            <Tab label="Players" icon={<PhoneIcon />} />
            <Tab label="Fav Players" />
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
