import * as React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

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
                    <Button>ورود/ثبت نام</Button>
                    <Button>تماس با ما</Button>
                    <Button>ارتباط با ما</Button>
                    <Button>اخبار</Button>
                </ThemeProvider>
            </Toolbar>
        </AppBar>
    );
}

export default Bar;