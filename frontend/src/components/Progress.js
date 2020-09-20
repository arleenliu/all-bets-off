import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Heatmap } from './Heatmap';
import '../Group.css';
import LongButton from './LongButton';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  inner: {
    maxWidth: '75%',
    margin: theme.spacing(0, 'auto')
  },
  demo: {
    backgroundColor: '#D6ECF3',

  },
  title: {
    margin: theme.spacing(4, 0, 2),
  }
}));

const Base = (props) => {
  let match = useRouteMatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              {props.members.map(member =>
                <LongButton key={member._id} link={`${match.url}/${member._id}/heatmap`} primary={member.name} secondary={member.bio}/>
                // <div class='group'>
                //   <ListItem button component={Link} to={`${match.url}/${member._id}/heatmap`}>
                //     <div class='group_block'>
                //       <ListItemIcon>
                //         <Avatar />
                //       </ListItemIcon>
                //       <ListItemText
                //         primary={member.name}
                //       />
                //     </div>
                //   </ListItem>
                // </div>
              )}
            </List>
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default function Progress(props) {
  let match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.url}/:user/heatmap`}>
          <Heatmap challenge={props.challenge}/>
        </Route>
        <Route path={`${match.url}`}>
          <Base challenge={props.challenge} members={props.members}/>
        </Route>
      </Switch>
    </>
  );
}