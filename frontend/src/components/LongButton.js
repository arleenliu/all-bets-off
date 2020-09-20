import React from 'react';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../Group.css';

export default function LongButton(props) {
  return (
    <div class='group'>
      <ListItem button component={Link} to={props.link}>
        <div class='group_block'>
          <ListItemIcon>
            <Avatar />
          </ListItemIcon>
          {props.primary && 
          <ListItemText
            primary={props.primary}
          />}
          {props.secondary && 
          <ListItemText
            secondary={props.secondary}
          />}
        </div>
      </ListItem>
    </div>
  );
}