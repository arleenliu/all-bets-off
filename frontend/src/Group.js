import React from 'react';
import { makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Avatar,
    Grid
} from '@material-ui/core';
import Challenge from './Challenge';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    inner: {
      maxWidth: '75%',
      margin: theme.spacing(0, 'auto')
    },
    demo: {
      backgroundColor: '#D3D3D3',
      
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
                <ListItem button component={Link} to={`${match.url}/specificgroup/challenges`}>
                    <ListItemIcon>
                    <Avatar />
                </ListItemIcon>
                <ListItemText
                  primary="Group"
                />
                </ListItem>,
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

            <Switch>
                <Route path={`${match.path}/specificgroup/challenges`}>
                    <Challenge />
                </Route>
                <Route path={`${match.path}/`}>
                    <GroupPage />
                </Route>
            </Switch>
            </>
          );

}


export default Group;