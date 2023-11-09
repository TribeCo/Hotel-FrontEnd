import { ThemeProvider } from "@mui/material/styles";

import { Button, colors } from "@mui/material";
import { theme } from "../../layouts/theme";
import "./BackgroundImage.css"
import Bar from './Bar';

const body_TODO = () => {
    const res = []
    for (let i = 0; i < 100; i++) {
        res.push(<br />);
    }
    return res;
}

const HomePage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="background-image">
                <Bar />  
            </div>
            <div>
                <center>
                    {body_TODO()}
                    <h1 style={{fontSize: 100, backgroundColor: 'purple'}}> Footer </h1>
                </center>
            </div>
        </ThemeProvider>
    );
}

export default HomePage;