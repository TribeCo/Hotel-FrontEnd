import * as React from 'react';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';

import './Bar.css';

const buttons = [
    <Button>ورود/ثبت نام</Button>,
    <Button>تماس با ما</Button>,
    <Button>ارتباط با ما</Button>,
    <Button>اخبار</Button>,
]


const Bar = () => {
    return (
        <AppBar variant='outlined'>
            <Toolbar>
                {buttons} 
            </Toolbar>
        </AppBar>
    );
}

export default Bar;