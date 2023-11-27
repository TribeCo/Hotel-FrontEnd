import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import Slider from '@mui/material/Slider';
import './FilterPopUp.css'; // Import the CSS file

const theme = createTheme({
 components: {
  MuiSlider: {
      styleOverrides: {
          track: {
           color: '#5B3D21',
          },
          markLabel: {
           color: 'white',
           '&[data-index="0"]': {
             transform: 'translateX(5%)',
           },
           '&[data-index="1"]': {
             transform: 'translateX(-90%)',
           },
          },
      },
  },
 },
});

const FilterPopUP = ({ children }) => {
 const [value, setValue] = useState(0);
 const [sliderValue, setSliderValue] = useState(1500000);
 const [Checkedvalue, setCheckedValue] = useState(3);

 const handleIncrement = () => {
    setValue(parseInt(value) + 1);
   };
   

 const handleDecrement = () => {
  if (value > 0) {
      setValue(parseInt(value) - 1);
  }
 };

 const handleSliderChange = (event, newValue) => {
  setSliderValue(newValue);
 };

 const handleInputChange = (event) => {
  if (event.target.value.length <= 1) {
      setValue(event.target.value);
  }
 };

 return (
    <div className="card">
        <IconButton className="close-button" onClick={() => window.close()}>
            <CloseIcon sx={{ color: '#BE936A' }} />
        </IconButton>
        <div className="small-card left-card">
            <div className="number-input-wrapper">
                <IconButton onClick={handleDecrement} sx={{ width: 24, height: 24, border: '2px solid #4D3520', borderRadius: '50%', '&:hover': { backgroundColor: '#BE936B', color: 'white' } , backgroundColor: '#BE936B' }}>
                  <ArrowDownward />
                </IconButton>
                <input className="number-input" type="text" value={value} onChange={handleInputChange} />
                <IconButton onClick={handleIncrement} sx={{ width: 24, height: 24, border: '2px solid #4D3520', borderRadius: '50%', '&:hover': { backgroundColor: '#BE936B', color: 'white' } , backgroundColor: '#BE936B'}}>
                  <ArrowUpward />
                </IconButton>
            </div>
                <div className="card-text">تعداد تخت ها</div>
            </div>
            <div className="small-card middle-card">
                <div className="card-text">نوع اتاق</div>
                <label className="container">
                    <input type="radio" checked={Checkedvalue === 1} onChange={() => setCheckedValue(1)} />
                    <span className="checkmark"></span>
                    وی آی پی
                </label>
                <label className="container">عادی
                    <input type="radio" checked={Checkedvalue === 2} onChange={() => setCheckedValue(2)} />
                    <span className="checkmark"></span>
                </label>
                <label className="container">بدون فیلتر
                    <input type="radio" checked={Checkedvalue === 3} onChange={() => setCheckedValue(3)} />
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="small-card right-card">
                <div className="card-text">قیمت</div>
                <ThemeProvider theme={theme}>
                    <Slider
                        defaultValue={1500000}
                        aria-label="Default"
                        valueLabelDisplay="off"
                        min={0}
                        max={5000000}
                        step={100000}
                        marks={[
                            { value: 0, label: '0 تومان' },
                            { value: 5000000, label: 'تومان 5,000,000' },
                        ]}
                        onChange={handleSliderChange}
                        sx={{
                            width: 312,
                            height: 5,
                            borderRadius: 100,
                            '& .MuiSlider-thumb': {
                                fill: '#BE936B',
                                strokeWidth: 2,
                                stroke: '#5B3D21',
                                filter: 'drop-shadow(0px 4px 4.699999809265137px rgba(0, 0, 0, 0.16))',
                                width: 24,
                                height: 24,
                            },
                            '& .MuiSlider-track': {
                                color: '#5B3D21',
                            },
                            '& .MuiSlider-rail': {
                                color: '#BEBEBE',
                            },
                        }}
                    />
                </ThemeProvider>
                <div className="slider">تومان {sliderValue}</div>
            </div>
            <button className="custom-button">اعمال تغییرات</button>
        </div>
    );
};

export default FilterPopUp;
