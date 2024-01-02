import React from 'react';
import { Typography, Button, Paper, Container } from '@mui/material';

const Error500Page = () => {
    return (
        <Container component="main" maxWidth="sm"> {/* Changed maxWidth from 'xs' to 'sm' */}
            <Paper 
                elevation={3} 
                style={{ 
                    padding: '20px', 
                    marginTop: '50px', 
                    textAlign: 'center',
                    backgroundColor: '#44475A', // Light grey background for the paper
                }}
            >
                <Typography 
                    variant="h4" 
                    gutterBottom 
                    style={{ color: '#8BE9FD' }} // Dark text color for the title
                >
                    500 - Internal Server Error
                </Typography>
                <Typography 
                    variant="body1" 
                    gutterBottom 
                    style={{ color: '#BD93F9' }} // Slightly lighter text color for the body
                >
                    Oops! Something went wrong on our end.
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    href="/" // assuming this leads to your home page
                    style={{ marginTop: '20px' }}
                >
                    Go to Home
                </Button>
            </Paper>
        </Container>
    );
};

export default Error500Page;
