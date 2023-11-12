import * as React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from "react-router-dom";

const font_size = 23;
const button_padding = 13;

const button_theme = createTheme({
    components: {
       MuiButton: {
        styleOverrides: {
           root: {
                color: '#BD93F9', // purple
                fontSize: font_size,
                paddingLeft: button_padding,
                paddingRight: button_padding,
            },
        },
       },
    },
});

const Bar = () => {
    return (
        <AppBar
            sx={{
                position: 'static',
                padding: 2,
                background: 'transparent'
            }}
            >
            <Toolbar>
                <ThemeProvider theme={button_theme}>
                    <Button 
                        variant='contained' 
                        sx={{
                            bgcolor: 'purple', 
                            marginRight: 2, 
                            borderRadius: 4
                        }}
                    ><Link to="/register">ثبت نام</Link></Button>
                    <Button 
                        variant='contained' 
                        sx={{
                            bgcolor: 'purple', 
                            borderRadius: 4
                        }}
                    ><Link to="/login">ورود</Link></Button>
                    <Button>تماس با ما</Button>
                    <Button>ارتباط با ما</Button>
                    <Button>اخبار</Button>
                </ThemeProvider>
            </Toolbar>
        </AppBar>
    );
}

export default Bar;