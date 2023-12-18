import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CommentList = ({ comments, isOpen, onClose }) => {
  return (
      <Drawer 
          anchor="left" 
          open={isOpen} 
          onClose={onClose}
          sx={{
              '& .MuiDrawer-paper': {
                width: '300px',
                position: 'static'
              },
            }}>
          <List>
              {comments.map((comment, index) => (
              <ListItem key={index}>
                    <ListItemText primary={comment.text} />
              </ListItem>
              ))}
          </List>
      </Drawer>
  );
};

export default CommentList;