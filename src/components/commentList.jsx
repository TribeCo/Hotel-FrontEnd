import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';

import {
	Button,
	TextField,
	Grid,
    Typography,
    Divider,
} from "@mui/material";

const CommentList = ({ comments, isOpen, onClose }) => {
    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '300px',
                    position: 'static',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                },
            }}>

            <List>
                {comments.map((comment, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={comment.text} />
                    </ListItem>
                ))}
            </List>

            <Grid>
                <TextField
                    sx={{
                        mb: 1,
                        borderRadius: 3,
                        bgcolor: "#F8F8F2",  
                    }}
                    inputProps={{ style: { color: 'black' } }}
                    multiline
                    rows={4}
                    fullWidth
                    defaultValue={"نظر خود را اینجا وارد کنید"}  //TODO: take context of new comment from here
                />

                <Button
                    // onClick={() => ???}   //TODO: send new commnet to the database and store it.
                        fullWidth
                        variant="contained"
                            sx={{
                                mb: 1,
                                borderRadius: 3,
                                bgcolor: "#F8F8F2",
                            }}>
                    <SendIcon sx={{ mr: 1 }} />
                    <Typography variant="h6" >
                        ارسال کامنت
                    </Typography>
                </Button>
            </Grid>
        </Drawer>
    );
};

export default CommentList; 