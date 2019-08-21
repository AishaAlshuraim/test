import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="contact us" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Comments" icon={<FavoriteIcon />} {...a11yProps(2)} />
          <Tab label="Visitors" icon={<PersonPinIcon />} {...a11yProps(3)} />
          <Tab label="Address" icon={<HelpIcon />} {...a11yProps(4)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <p>
         <a href="tel:123-456-7890" style={{textDecoration: 'none'}}>Click To Call</a>
         <p></p>
        <a href="https://www.riyadhgolfcourses.com/" style={{textDecoration: 'none'}}>Click To Show Website</a>
      </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>Comments :</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
            <p> Male </p>
            <p> Female </p>
            <p> Kids</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
           <p> P.O. Box 84329 </p>
            <p> Riyadh 11671 </p>
            <p> Kingdom of Saudi Arabia</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <p> Item Five</p>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <p> Item Six</p>
      </TabPanel>

    </div>
  );
}
