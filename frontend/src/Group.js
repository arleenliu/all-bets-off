import React from 'react';
import { makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar,
    Grid,
    TextareaAutosize
} from '@material-ui/core';
import Challenge from './Challenge';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import './Group.css';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    inner: {
      maxWidth: '75%',
      margin: theme.spacing(0, 'auto')
    },
    demo: {
      backgroundColor: '#D6ECF3',
      margin: 'auto',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    }
  }));
  
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const GroupPage = (props) => {
    const classes = useStyles();
    let match = useRouteMatch();
    const [dense, setDense] = React.useState(false);
    return(
    <div className={classes.root}>
        <div className={classes.inner}>
        <Grid item xs={12} md={6}>
            <div className={classes.demo}>
            <List dense={dense}>
                {generate(
                <div class='group'>
                <ListItem button component={Link} to={`${match.url}/specificgroup/challenges`}>
                  <div class= 'group_block'>
                  <ListItemIcon>
                    <Avatar />
                  </ListItemIcon>
                  <ListItemText
                    primary="Group"
                  />
                  </div>
                </ListItem>
                </div>
                )}
            </List>
            </div>
        </Grid>
        </div>
    </div>
    );
}

const Group = (props) => {
        let match = useRouteMatch();
  
        return (
            <>
            <div class = "center">
            <Switch>
                <Route path={`${match.url}/specificgroup/challenges`}>
                    <Challenge />
                </Route>
                <Route path={`${match.url}`}>
                    <GroupPage />
                </Route>
            </Switch>
            </div>
            </>
          );

}


export default Group;