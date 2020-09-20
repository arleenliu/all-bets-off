import React, {useState, useEffect} from 'react';
import {
  makeStyles,
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
import Axios from 'axios';
import LongButton from './components/LongButton';

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

const GroupPage = (props) => {
  const classes = useStyles();
  let match = useRouteMatch();
  const [dense, setDense] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List dense={dense}>
              {props.groups.map((group) =>
                <LongButton key={group._id} link={`${match.url}/${group._id}/challenges`} primary={group.name} secondary={group.about}/>
              )}
            </List>
          </div>
        </Grid>
      </div>
    </div>
  );
}

const Group = (props) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let unfilteredGroups = await Axios.get('/group');
      unfilteredGroups = unfilteredGroups.data;
      let userGroups = unfilteredGroups.filter(group => props.user.groups.includes(group._id));
      setGroups(userGroups);
    }
    fetchData();
  }, [props.user]);
  let match = useRouteMatch();

  
  return (
    <>
      <div class="center">
        <Switch>
          <Route path={`${match.url}/:groupId/challenges`}>
            <Challenge user={props.user} />
          </Route>
          <Route path={`${match.url}`}>
            <GroupPage user={props.user} groups={groups}/>
          </Route>
        </Switch>
      </div>
    </>
  );

}


export default Group;