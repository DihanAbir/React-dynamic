import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },
      });
    

const Header = () => {
    const classes = useStyles();
        const [value, setValue] = React.useState(0);
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
    
        return (
            <div>
                <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<HomeIcon />} label="RECENTS" />
            <Tab icon={<FavoriteIcon />} label="FAVORITES" />
            <Tab icon={<RecentActorsIcon />} label="NEARBY" />
          </Tabs>
        </Paper>
            </div>
        );
    };
export default Header;