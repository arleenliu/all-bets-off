import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import ChallengeNav from './components/ChallengeNav';
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

  },
  title: {
    margin: theme.spacing(4, 0, 2),
  }
}));

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

const Base = (props) => {
  const classes = useStyles();
  let match = useRouteMatch();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            Challenges for {props.groupName}
            <List >
              {props.challenges.map(challenge =>
                <LongButton link={`${match.url}/${challenge._id}`} key={challenge._id} primary={challenge.challenge_name} />
                //   <ListItem button component={Link} to={`${match.url}/${challenge._id}`}>
                //     <div class='group_block'>
                //       {/* <ListItemIcon>
                //         <Avatar />
                //       </ListItemIcon> */}
                //       <ListItemText
                //         primary={challenge.challenge_name}
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

export default function Challenge() {
  let match = useRouteMatch();
  let { groupId } = useParams();
  const [challenges, setChallenges] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let data = await Axios.get(`/group/${groupId}`);
      console.log(data, groupId);
      setChallenges(data.data.challenges);
      setGroupName(data.data.name);
      setMembers(data.data.members);
      console.log(data.data.members);
    }
    fetchData();
  }, [groupId]);

  return (

    <Switch>
      <Route path={`${match.url}/:challengeId`}>
        <ChallengeNav members={members}/>
      </Route>
      <Route path={`${match.url}`}>
        <Base challenges={challenges} groupName ={groupName}/>
      </Route>
    </Switch>
  );
};